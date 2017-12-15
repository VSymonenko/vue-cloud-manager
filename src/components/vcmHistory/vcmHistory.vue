<template>
  <div id="vcm-history">
    <pre>{{tree}}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'tree'
    ])
  }
}
</script>

<style lang="scss">
  @import './vcmHistory.scss'
</style>
