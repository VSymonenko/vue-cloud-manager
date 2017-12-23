<template>
  <div :class="{'vcm-content': !first, 'vcm-content-folder': first}">
    <vcm-button 
      @click.native    = "selectFolder($el, model)"
      @dblclick.native = "openFolder(model)"
      :svgContent      = "icon.folder48"
      buttonClass      = "vcm-content-folder"
      v-if             = "first"
      v-show           = "model.name">
      <span class="btnText">&nbsp;{{model.name}}</span>
    </vcm-button>
    <vcm-content v-show="open" v-for="(model, key, index) in ordered" :model="model" :key="index"></vcm-content>
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
      'saveToBufferItem'
    ]),
    selectFolder(el, model) {
      this.cleanSelection('.vcm-content-folder')
      el.firstChild.classList.toggle('toggleBtn')
      this.saveToBufferElement(el)
      this.saveToBufferItem(model)
    },
    openFolder(item) {
      if (this.model.children) {
        this.setTreeContent(item)
        this.$eventsVCM.$emit('select-folder' + item.id)
        this.cleanSelection('.vcm-content-folder')
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
      'contentBuffer'
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
