<template>
  <div :class="{'vcm-tree': !first}" v-if="ordered">
    <vcm-button 
      @click.native.stop = "selectFolder(model, $el)"
      :svgContent        = "(model.name == 'VUE-CLOUD-MANAGER') ? icon.cloud18 : icon.folder18"
      :style             = "{'padding-left': folderLag}"
      buttonClass        = "vcm-tree-folder">
      <span class="btnText">&nbsp;{{model.name}}</span>
    </vcm-button>
    <vcm-tree v-if="open || !first" v-for="(model, key, index) in ordered" :model="model" :key="index"></vcm-tree>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vcmButton from '../vcmButton/vcmButton'
import generateComponentTrace from '../../core/utils/helpler'
import mixin from '../../core/utils/mixin'

const filters = {
  /* eslint-disable arrow-body-style */
  status(objs) { return objs.filter((obj) => { return obj.status }) },
  statusInstance(objs) { return objs.$children.filter((obj) => { return obj.open }) }
}

export default {
  mixins: [mixin],
  components: {
    vcmButton
  },
  name: 'vcm-tree',
  props: ['model'],
  data: () => ({
    first: false,
    open: false,
    folderLag: 0
  }),
  methods: {
    ...mapActions([
      'setTreeContent',
      'saveBack'
    ]),
    openFolder() {
      this.open = !this.open
      this.cleanSelection('.vcm-tree-folder')
      this.$el.firstChild.classList.add('toggleBtn')
      this.saveBack(this.$parent.model)
    },
    selectFolder(item, el) {
      this.saveBack(this.$parent.model)
      this.setTreeContent(item)
      const childStatus = filters.statusInstance(this)
      let child
      childStatus.forEach(el => {
        el.open === true && this.open === true ? child = true : false
      })
      this.cleanSelection('.vcm-tree-folder')
      el.firstChild.classList.add('toggleBtn')
      switch (true) {
        case this.open === false:
          this.open = true
          break
        case child === true && this.open === true:
          childStatus.forEach(el => {
            el.open = false
          })
          break
        default:
          break
      }
    }
  },
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
  mounted() {
    if (generateComponentTrace(this).length > 0) this.first = !this.first
    this.folderLag = (generateComponentTrace(this) * 10) + 'px'
    this.$eventsVCM.$on('select-folder' + this.model.id, this.openFolder)
  },
  beforeDestroy() {
    this.$eventsVCM.$off('select-folder' + this.model.id)
  }
}
</script>

<style lang="scss">
  @import './vcmTree.scss'
</style>
