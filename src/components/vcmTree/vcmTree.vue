<template>
  <div :class="{'vcm-tree': !first}" v-if="ordered">
    <button @click.stop="selectFolder(model)" v-toggle>
      <div class="treeFolder">{{ (model.name == 'VUE-CLOUD-MANAGER') ? 'cloud' : 'folder'}}</div>&nbsp;{{model.name}}
    </button>
    <ul v-show="open || !first">
      <vcm-tree  class="item" v-for="(model, key, index) in ordered" :model="model" :key="index"></vcm-tree>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  directives: {
    toggle: {
      // componentUpdated: function (el) {
      //   let item = document.querySelectorAll('.toggleBtn')
      //   _.each(item, function (item) {
      //     item.classList.remove('toggleBtn')
      //   }),
      //   el.classList.add('toggleBtn')
      // }
    }
  },
  name: 'vcm-tree',
  props: {
    model: Object,
    default: {}
  },
  data: () => ({
    first: false,
    open: false
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
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length
    },
    ordered() {
      return this.model.children
    }
  },
  mounted() {
    if (this.generateComponentTrace(this).length > 0) this.first = !this.first
  }
}
</script>

<style scoped>
  @import './vcmTree.scss';
</style>
