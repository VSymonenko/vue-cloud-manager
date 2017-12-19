<template>
  <div id="vue-cloud-manager">
    <vcm-header/>
    <main>
      <vcm-tree :model="tree"/>
      <vcm-content :model="treeContent"/>
      <vcm-history/>
    </main>
    <vcm-footer/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vcmContent from '../vcmContent/vcmContent'
import vcmFooter from '../vcmFooter/vcmFooter'
import vcmHeader from '../vcmHeader/vcmHeader'
import vcmHistory from '../vcmHistory/vcmHistory'
import vcmTree from '../vcmTree/vcmTree'
import '../../core'

export default {
  methods: {
    ...mapActions([
      'updateTreeState'
    ])
  },
  computed: {
    ...mapGetters([
      'defaultTree',
      'tree',
      'treeContent'
    ])
  },
  props: {
    simple: {
      type: Object,
      default: null
    }
  },
  name: 'vue-cloud-manager',
  components: {
    vcmContent,
    vcmFooter,
    vcmHeader,
    vcmHistory,
    vcmTree
  },
  created() {
    this.simple ? this.updateTreeState(this.simple) : this.updateTreeState(this.defaultTree)
  }
}
</script>

<style lang="scss">
  @import './vueCloudManager.scss'
</style>