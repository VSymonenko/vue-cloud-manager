<template>
  <div id="vue-cloud-manager">
    <vcm-header/>
    <main>
      <vcm-tree :model="tree"/>
      <vcm-content/>
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
  computed: { ...mapGetters([
    'defaultTree'
  ])
  },
  data: () => ({
    tree: {}
  }),
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
  },
  mounted() {
    this.tree = this.defaultTree
  }
}
</script>

<style scoped>
  @import './vueCloudManager.scss';
</style>