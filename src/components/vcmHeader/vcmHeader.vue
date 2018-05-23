<template>
  <div id="vcm-header">
    <vcm-tabs v-for="tool in toolBar" :key="tool.name" class="horizontal-menu">
      <vcm-button
        :svgContent   = "icon[tool.icon]"
        @click.native = "doIt(tool.name)"
        :disabled     = "isActive(tool.name)"
        button-class  = "vcm-header-button">
        <span class="btnText">{{tool.name}}</span>
      </vcm-button>
    </vcm-tabs>
    <vcm-form v-if="showModalRename" @close="getName">
      <h3 slot="vcm-header">enter name</h3>
      <input slot="vcm-body" v-model="newName"/>
    </vcm-form>
    <vcm-form v-if="showModalAdd" @close="addFolder">
      <h3 slot="vcm-header">enter name</h3>
      <input slot="vcm-body" v-model="newName"/>
    </vcm-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mixin from '../../core/utils/mixin'
import vcmTabs from '../vcmTabs/vcmTabs'

export default {
  components: {
    vcmTabs
  },
  name: 'vcm-header',
  mixins: [mixin],
  computed: {
    ...mapGetters([
      'icon',
      'treeContent',
      'treeState',
      'historyCounter',
      'contentBuffer',
      'donor'
    ])
  },
  data: () => ({
    copyCounter: 1,
    newName: '',
    showModalRename: false,
    showModalAdd: false,
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
        name: 'add folder',
        icon: 'add'
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
    isActive(name) {
      switch (name) {
        case 'back':
          if (this.historyCounter === 0) return true
          break
        case 'add folder':
          return false
        default:
          if (!this.contentBuffer.item.name) return true
          break
      }
    },
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
          if (openItem.format === 'folder') {
            this.cleanSelection('.vcm-tree-folder')
            this.setTreeContent(openItem)
            this.$eventsVCM.$emit('select-folder' + openItem.id)
            this.cleanSelection('.vcm-content-folder')
            this.clearBuffer()
          }
          break
        case 'rename':
          this.newName = this.contentBuffer.item.name
          this.showModalRename = true
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
        case 'add folder':
          this.newName = ''
          this.showModalAdd = true
          break
        default:
          break
      }
    },
    addFolder() {
      this.showModalAdd = false
      let newFolder = Object.assign({}, this.donor)
      newFolder.id = this.$core.id.uniqId()
      newFolder.name = this.newName
      newFolder.createTime = this.$core.moment.getTime()
      newFolder.createDate = this.$core.moment.getDate()
      newFolder.modifiedTime = this.$core.moment.getTime()
      newFolder.modifiedDate = this.$core.moment.getDate()
      newFolder.children = []
      this.treeContent.children.push(newFolder)
    },
    getName() {
      this.showModalRename = false
      const item = this.contentBuffer.item
      this.$set(item, 'name', this.newName)
      this.$set(item, 'modifiedTime', this.$core.moment.getTime())
      this.$set(item, 'modifiedDate', this.$core.moment.getDate())
      this.newName = ''
    }
  }
}
</script>

<style lang="scss">
  @import './vcmHeader.scss'
</style>
