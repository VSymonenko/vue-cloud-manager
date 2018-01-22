<template>
  <div :class="{'vcm-content': !first, 'vcm-folder': first}">
    <vcm-button 
      @click.native    = "selectFolder($el, model)"
      @dblclick.native = "openFolder(model)"
      :svg-content     = "svgIcon"
      button-class     = "vcm-content-folder"
      v-if             = "first"
      v-show           = "model.name">
      <span class="btnText">{{model.name}}</span>
    </vcm-button>
    <vcm-content v-show="open && model.format === 'folder'" v-for="(model, key, index) in ordered" :model="model" :key="index"></vcm-content>
    <vcm-content v-show="open && model.format !== 'folder'" v-for="(model, key, index) in ordered" :model="model" :key="index"></vcm-content>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import generateComponentTrace from '../../core/utils/helpler'
import mixin from '../../core/utils/mixin'

export default {
  mixins: [mixin],
  methods: {
    ...mapActions([
      'setTreeContent',
      'saveToBufferElement',
      'saveToBufferItem',
      'clearBufferItem'
    ]),
    selectFolder(el, model) {
      this.cleanSelection('.vcm-content-folder')
      el.firstChild.classList.toggle('toggleBtn')
      this.saveToBufferElement(el)
      this.saveToBufferItem(model)
    },
    openFolder(item) {
      this.clearBufferItem()
      if (this.model.children) {
        this.setTreeContent(item)
        this.$eventsVCM.$emit('select-folder' + item.id)
        this.cleanSelection('.vcm-content-folder')
      }
    },
    orderBy(key) {
      /* needed redesign */
      let item = this.treeContent.children
      switch (key) {
        case 'name':
          item.sort((a, b) => {
            let nameA = a.name.toUpperCase()
            let nameB = b.name.toUpperCase()
            if (nameA < nameB) {
              return -1
            }
            if (nameA > nameB) {
              return 1
            }
            return 0
          })
          return item
        default:
          return item
      }
    }
  },
  data: () => ({
    open: true,
    first: false
  }),
  props: ['model'],
  computed: {
    ...mapGetters([
      'icon',
      'contentBuffer',
      'treeContent'
    ]),
    isFolder() {
      return this.model.children && this.model.children.length
    },
    ordered() {
      return this.model.children
    },
    svgIcon() {
      switch (this.model.format) {
        case 'folder':
          return this.icon.folder48
        default:
          return this.icon.file
      }
    }
  },
  name: 'vcm-content',
  mounted() {
    /* eslint-disable no-sequences */
    if (generateComponentTrace(this).length !== 0) this.first = !this.first, this.open = !this.open
    if (this.first) {
      // const newObj = JSON.parse(JSON.stringify(this.treeContent.children))
    }
  }
}
</script>

<style lang="scss">
  @import './vcmContent.scss'
</style>
