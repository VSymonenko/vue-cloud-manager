<template>
  <div id="vcm-header">
    <div v-for="tool in toolBar" class="horizontal-menu">
      <vcm-button
        :svgContent="icon[tool.icon]"
        @click.native="doIt(tool.name)"
        :disabled="tool.name === 'back' && historyCounter === 0 || !contentBuffer.item.name"><span class="btnText">&nbsp;{{tool.name}}</span></vcm-button>
    </div>
    <vcm-form v-if="showModal" @close="getName">
      <h3 slot="vcm-header">enter name</h3>
      <input slot="vcm-body" v-model="newName"/>
    </vcm-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Moment from '../../core/utils/moment'
import mixin from '../../core/utils/mixin'

export default {
  mixins: [mixin],
  computed: {
    ...mapGetters([
      'icon',
      'treeContent',
      'treeState',
      'historyCounter',
      'contentBuffer'
    ]),
    back() {
      return false
    }
  },
  data: () => ({
    copyCounter: 1,
    newName: '',
    showModal: false,
    toolBar: [
      {
        name: 'back',
        icon: 'back18'
      },
      {
        name: 'open',
        icon: 'openFolder18'
      },
      {
        name: 'rename',
        icon: 'rename18'
      },
      {
        name: 'copy',
        icon: 'copy18'
      },
      {
        name: 'delete',
        icon: 'delete18'
      }
    ]
  }),
  methods: {
    ...mapActions([
      'setTreeContent',
      'historyCounterDecrease',
      'clearBuffer'
    ]),
    doIt(act) {
      const openItem = this.contentBuffer.item
      switch (act) {
        case 'back':
          if (this.historyCounter >= 0) {
            this.historyCounterDecrease()
            const choose = this.treeState.treeChoosen
            const model = choose ? this.treeState.back[this.historyCounter - 1]
              : this.treeState.back[this.historyCounter]
            const element = choose ? this.treeState.parentElement[this.historyCounter - 1]
              : this.treeState.parentElement[this.historyCounter]
            this.cleanSelection('.vcm-tree-folder')
            element.classList.add('toggleBtn')
            this.setTreeContent(model)
            this.$eventsVCM.$emit('select-folder' + model.id, true)
          }
          break
        case 'open':
          const openElement = this.contentBuffer.element
          if (openItem) {
            this.cleanSelection('.vcm-tree-folder')
            openElement.classList.add('toggleBtn')
            this.setTreeContent(openItem)
            this.$eventsVCM.$emit('select-folder' + openItem.id)
            this.cleanSelection('.vcm-content-folder')
            this.clearBuffer()
          }
          break
        case 'rename':
          this.newName = this.contentBuffer.item.name
          this.showModal = true
          break
        case 'copy':
          const donorItem = this.contentBuffer.item
          const newItem = Object.assign({}, donorItem)
          newItem.name = donorItem.name + '_copy_' + this.copyCounter++
          this.treeContent.children.push(newItem)
          break
        case 'delete':
          const inavlid = this.treeContent.children
          const deleteItem = this.contentBuffer.item
          this.$delete(inavlid, inavlid.indexOf(deleteItem))
          break
        default:
          break
      }
    },
    getName() {
      this.showModal = false
      const item = this.contentBuffer.item
      this.$set(item, 'name', this.newName)
      this.$set(item, 'modifiedTime', Moment('theTime'))
      this.$set(item, 'modifiedDate', Moment('theDate'))
      this.newName = ''
    }
  }
}
</script>

<style lang="scss">
  @import './vcmHeader.scss'
</style>
