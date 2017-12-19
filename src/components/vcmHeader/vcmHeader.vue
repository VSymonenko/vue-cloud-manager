<template>
  <div id="vcm-header">
    <div v-for="tool in toolBar" class="horizontal-menu">
      <vcm-button :svgContent="icon[tool.icon]" @click.native="doIt(tool.name)"><span class="btnText">&nbsp;{{tool.name}}</span></vcm-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vcmButton from '../vcmButton/vcmButton'
import mixin from '../../core/utils/mixin'

export default {
  mixins: [mixin],
  components: {
    vcmButton
  },
  computed: {
    ...mapGetters([
      'icon',
      'treeContent',
      'treeState',
      'historyCounter',
      'contentBuffer'
    ])
  },
  data: () => ({
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
      'historyCounterDecrease'
    ]),
    doIt(act) {
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
          }
          break
        case 'open':
          const openElement = this.contentBuffer.element
          const openItem = this.contentBuffer.item
          this.cleanSelection('.vcm-tree-folder')
          openElement.classList.add('toggleBtn')
          this.setTreeContent(openItem)
          this.$eventsVCM.$emit('select-folder' + openItem.id)
          break
        default:
          console.log(act)
          break
      }
    }
  }
}
</script>

<style lang="scss">
  @import './vcmHeader.scss'
</style>
