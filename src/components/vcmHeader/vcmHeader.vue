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

export default {
  components: {
    vcmButton
  },
  computed: {
    ...mapGetters([
      'icon',
      'treeContent',
      'treeState'
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
      'setTreeContent'
    ]),
    doIt(act) {
      switch (act) {
        case 'back':
          const model = this.treeState.back
          if (model.length !== 0) {
            this.setTreeContent(model[model.length - 1])
            model.splice(-1, 1)
          }
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
