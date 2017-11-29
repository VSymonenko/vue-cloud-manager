<template>
  <div :class="{'vcm-content': !first, 'vcm-content-folder': first}" >
    <vcm-button @click.native="selectFolder(model)"
      @dblclick.native="openFolder(model)"
      :svgContent="icon.folder48"
      buttonClass="vcm-content-folder"
      v-if="first"
      v-show="model.name">
        <span class="btnText">&nbsp;{{model.name}}</span>
      </vcm-button>
    <div v-show="open">
      <vcm-content v-for="(model, key, index) in ordered" :model="model" :key="index"></vcm-content>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import generateComponentTrace from '../../core/utils/helpler'
import vcmButton from '../vcmButton/vcmButton'

export default {
  methods: {
    ...mapActions([
      'setTreeContent'
    ]),
    selectFolder(item) {
      // switch (true) {
      //   case (this.selected == false && this.treeState.check == false):
      //     this.checkbox = !this.checkbox
      //     this.$set(this.treeState, 'buffer', item)
      //     this.$set(this.treeState, 'check', true)
      //     this.selected = true
      //     let x = _.indexOf(this.treeContent.children, item)
      //     this.$set(this.treeState, 'itemIndex', x)
      //     break
      //   case (this.selected == true && this.treeState.check == true):
      //     this.$set(this.treeState, 'check', false)
      //     this.selected = false
      //     this.checkbox = !this.checkbox
      //     // this.$set(this.treeState, 'buffer', {})
      //     this.$set(this.treeState, 'itemIndex', null)
      // }
      console.log(item)
    },
    openFolder(item) {
      if (this.isFolder) {
        this.setTreeContent(item)
        // this.$set(this.treeContent, 'buffer', null)
        // this.checkbox = false
        // this.$set(this.treeContent, 'check', false)
      }
    }
  },
  components: {
    vcmButton
  },
  data: () => ({
    open: true,
    first: false
  }),
  props: ['model'],
  computed: {
    ...mapGetters([
      'icon',
      'treeContent'
    ]),
    isFolder() {
      return this.model.children && this.model.children.length
    },
    ordered() {
      return this.model.children
    }
  },
  name: 'vcm-content',
  mounted() {
    /* eslint-disable no-sequences */
    if (generateComponentTrace(this).length !== 0) this.first = !this.first, this.open = !this.open
  }
}
</script>

<style lang="scss">
  @import './vcmContent.scss'
</style>
