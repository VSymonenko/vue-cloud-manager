<template>
  <div :class="{'vcm-tree': !first, 'highlight': first}" v-if="ordered">
    <vcm-button @click.native.stop="selectFolder($el)"
      :iconSVG="(model.name == 'VUE-CLOUD-MANAGER') ? icon.cloud18 : icon.folder18"
      :buttonName="model.name"
      :style="{'padding-left': folderLag}">
    </vcm-button>
    <ul v-show="open || !first">
      <vcm-tree v-for="(model, key, index) in ordered" :model="model" :key="index"></vcm-tree>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vcmButton from '../vcmButton/vcmButton'

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
    folderLag: 0
  }),
  methods: { ...mapActions([
  ]),
    selectFolder() {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    generateComponentTrace(vm) {
      let tree = []
      let currentRecursiveSequence = 0
      if (vm._isVue && vm.$parent) {
        while (vm) {
          if (tree.length > 0) {
            let last = tree[tree.length - 1]
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++
              vm = vm.$parent
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence]
              currentRecursiveSequence = 0
            }
          }
          tree.push(vm)
          vm = vm.$parent
        }
        return tree
          .map(vm => vm[1])
          .join('\n')
          .trim()
      }
    }
  },
  computed: { ...mapGetters([
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
    if (this.generateComponentTrace(this).length > 0) this.first = !this.first
    this.folderLag = (this.generateComponentTrace(this) * 10) + 'px'
  }
}
</script>

<style lang="scss">
  @import './vcmTree.scss'
</style>
