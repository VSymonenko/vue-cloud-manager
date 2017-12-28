<template>
  <div id="vcm-footer">
    <div v-for="(item, index) in branch" v-if="index < branch.length">{{ item }} /</div>
    <div class="vcm-item-counter">
      <span v-if="counterItems != 0">items: {{ counterItems }} </span>
      <span v-if="selectedItems != 0">selected {{ selectedItems }} items</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'branch',
      'counterItems',
      'selectedItems'
    ])
  }
}
</script>

<style lang="scss">
  @import './vcmFooter.scss'
</style>
