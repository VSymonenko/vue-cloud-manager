<template>
  <div id="vcm-footer">
    <div v-for="(item, index) in branch" v-if="index < branch.length - 1">{{ item }} /</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'branch'
    ])
  }
}
</script>

<style lang="scss">
  @import './vcmFooter.scss'
</style>
