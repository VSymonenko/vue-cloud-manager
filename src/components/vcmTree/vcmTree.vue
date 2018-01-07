<template>
  <div :class="{'vcm-tree': !first}" v-if="ordered">
    <vcm-button
      @click.native.stop = "selectFolder(model, $el)"
      :svg-content        = "(model.format === 'root') ? icon.cloud18 : icon.folder18"
      :style             = "{'padding-left': folderLag}"
      button-class        = "vcm-tree-folder">
      <span class="btnText">{{ model.name }}</span>
    </vcm-button>
    <vcm-tree v-show="open || !first" v-for="(model, key, index) in ordered" :model="model" :key="index"></vcm-tree>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import generateComponentTrace from '../../core/utils/helpler'
import mixin from '../../core/utils/mixin'

const filters = {
  /* eslint-disable arrow-body-style */
  status(objs) { return objs.filter((obj) => { return obj.status }) },
  statusInstance(objs) { return objs.$children.filter((obj) => { return obj.open }) }
}

export default {
  mixins: [mixin],
  name: 'vcm-tree',
  props: {
    model: {
      type: Object
    }
  },
  data: () => ({
    first: false,
    open: false,
    folderLag: 0
  }),
  methods: {
    ...mapActions([
      'setTreeContent',
      'saveBack',
      'saveParentElement',
      'setHistoryCounter',
      'saveToBufferItem',
      'saveHistory',
      'saveBranch',
      'clearBranch',
      'clearBufferItem'
    ]),
    trigger(doIt) {
      (doIt) ? this.stream(doIt) : this.openFolder()
    },
    stream() {
      this.clearBranch()
      this.flow = 'down'
      const parallel = this.$parent.$children
      /* eslint-disable no-return-assign */
      parallel.forEach(el => {
        el.open = false
        el.flow = 'up'
      })
      if (this.$parent.open === false) {
        this.$parent.open = true
        this.clearBranch()
        this.flow = 'down'
      }
    },
    openFolder() {
      this.clearBranch()
      this.flow = 'down'
      this.open = !this.open
      this.cleanSelection('.vcm-tree-folder')
      this.$el.firstChild.classList.add('toggleBtn')
      this.saveBack(this.$parent.model)
      this.saveParentElement(this.$parent.$el.firstChild)
      this.$set(this.treeState, 'treeChoosen', false)
      this.setHistoryCounter()
    },
    selectFolder(item, el) {
      this.cleanSelection('.vcm-content-folder')
      this.clearBufferItem()
      this.clearBranch()
      this.flow = 'down'
      // this.saveToBufferItem(item)
      const hItem = {
        model: item,
        action: 'open'
      }
      this.saveHistory(hItem)
      const lastFolderId = () => {
        if (this.treeState.back.last()) return this.treeState.back.last().id
      }
      if (lastFolderId() !== this.model.id) {
        this.saveBack(this.model)
        this.saveParentElement(this.$el.firstChild)
        this.setHistoryCounter()
      }
      this.$set(this.treeState, 'treeChoosen', true)
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
      'treeContent',
      'treeState',
      'historyCounter'
    ]),
    flow: {
      get(val) { return val },
      set(val) {
        if (val === 'up') {
          this.$children.forEach(el => { el.flow = 'up' })
          this.open = false
        }
        if (val === 'down') {
          this.$parent.open = true
          this.$parent.flow = 'down'
          this.saveBranch(this.model.name)
        }
        return val
      }
    },
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
    this.$eventsVCM.$on('select-folder' + this.model.id, this.trigger)
  },
  beforeDestroy() {
    this.$eventsVCM.$off('select-folder' + this.model.id)
  }
}
</script>

<style lang="scss">
  @import './vcmTree.scss'
</style>
