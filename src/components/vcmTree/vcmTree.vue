<template>
  <div :class="{'vcm-tree': !first}" v-if="ordered">
    <vcm-button @click.native.stop="selectFolder(model)"
      :svgContent="(model.name == 'VUE-CLOUD-MANAGER') ? icon.cloud18 : icon.folder18"
      :style="{'padding-left': folderLag}"
      buttonClass="vcm-tree-folder">
        <span class="btnText">&nbsp;{{model.name}}</span>
    </vcm-button>
    <vcm-tree v-if="open || !first" v-for="(model, key, index) in ordered" :model="model" :key="index" v-model="status" v-bind="props"></vcm-tree>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vcmButton from '../vcmButton/vcmButton'
import generateComponentTrace from '../../core/utils/helpler'

/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
const filters = {
  /* eslint-disable arrow-body-style */
  status(objs) { return objs.filter((obj) => { return obj.status }) },
  statusInstance(objs) { return objs.$children.filter((obj) => { return obj.open }) }
}

export default {
  components: {
    vcmButton
  },
  name: 'vcm-tree',
  props: ['model', 'closed'],
  data: () => ({
    first: false,
    open: false,
    isClose: false,
    folderLag: 0,
    props: { closed: false }
  }),
  methods: {
    ...mapActions([
      'setTreeContent'
    ]),
    openFolder() {
      this.open = !this.open
    },
    selectFolder(item) {
      this.open = !this.open
      this.setTreeContent(item)
      // const childStatus = filters.statusInstance(this)
      // let child
      // /* eslint-disable arrow-parens */
      // /* eslint-disable no-unneeded-ternary */
      // childStatus.forEach(el => {
      //   el.open === true && this.open === true ? child = true : false
      // })
      // switch (true) {
      //   case this.isFolder > 0 && this.open === false:
      //     this.open = true
      //     break
      //   case child === true && this.open === true:
      //     // this.isClose = true
      //     childStatus.forEach(el => {
      //       el.open = false
      //       el.isClose = true
      //     })
      //     break
      //   default:
      //     this.open = false
      //     break
      // }
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
    },
    status() {
      // (el.open === true && el.$parent.open === true) ? this.open = false : false
    }
  },
  mounted() {
    if (generateComponentTrace(this).length > 0) this.first = !this.first
    this.folderLag = (generateComponentTrace(this) * 10) + 'px'
    /* eslint-disable space-in-parens */
    this.$eventsVCM.$on('select-folder' + this.model.id, this.openFolder )
    /* eslint-disable no-restricted-globals */
  },
  beforeDestroy() {
    this.$eventsVCM.$off('select-folder' + this.model.id)
  }
}
</script>

<style lang="scss">
  @import './vcmTree.scss'
</style>
