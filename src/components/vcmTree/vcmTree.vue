<template>
  <div :class="{'vcm-tree': !first}" v-if="ordered">
    <vcm-button @click.native.stop="selectFolder(model)"
      :svgContent="(model.name == 'VUE-CLOUD-MANAGER') ? icon.cloud18 : icon.folder18"
      :style="{'padding-left': folderLag}"
      buttonClass="vcm-tree-folder">
        <span class="btnText">&nbsp;{{model.name}}</span>
      </vcm-button>
    <ul v-show="open || !first">
      <vcm-tree v-for="(model, key, index) in ordered" :model="model" :key="index"></vcm-tree>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vcmButton from '../vcmButton/vcmButton'
import generateComponentTrace from '../../core/utils/helpler'

export default {
  components: {
    vcmButton
  },
  name: 'vcm-tree',
  props: {
    model: Object,
    default: {}
  },
  data: () => ({
    first: false,
    open: false,
    folderState: '',
    folderLag: 0
  }),
  methods: {
    ...mapActions([
      'setTreeContent'
    ]),
    selectFolder(item) {
      if (this.isFolder) {
        this.open = !this.open
        this.folderState = this.icon.expand18
      }
      if (this.ordered) {
        // console.log(this.open)
      }
      this.folderState = this.icon.chevron18
      this.setTreeContent(item)
    }
  },
  computed: {
    ...mapGetters([
      'icon'
    ]),
    isFolder() {
      return this.model.children && this.model.children.length
    },
    ordered() {
      return this.model.children
    }
  },
  mounted() {
    if (generateComponentTrace(this).length > 0) this.first = !this.first
    this.folderLag = (generateComponentTrace(this) * 10) + 'px'
  },
  updated() {
    // console.log(this.folderState)
  }
}
</script>

<style lang="scss">
  @import './vcmTree.scss'
</style>
