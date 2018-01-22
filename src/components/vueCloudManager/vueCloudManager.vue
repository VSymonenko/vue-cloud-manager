<template>
  <div id="vue-cloud-manager">
    <!-- <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'> -->
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
import { mapGetters } from 'vuex'
import vcmContent from '../vcmContent/vcmContent'
import vcmFooter from '../vcmFooter/vcmFooter'
import vcmHeader from '../vcmHeader/vcmHeader'
import vcmHistory from '../vcmHistory/vcmHistory'
import vcmTree from '../vcmTree/vcmTree'

export default {
  computed: {
    ...mapGetters([
      'tree',
      'treeContent',
      'donor'
    ])
  },
  props: {
    simple: {
      type: Object
    }
  },
  name: 'vue-cloud-manager',
  components: {
    vcmContent,
    vcmFooter,
    vcmHeader,
    vcmHistory,
    vcmTree
  }
}
</script>

<style lang="scss">
  @import './vueCloudManager.scss';
  @import './../../core/style/style.scss';
</style>