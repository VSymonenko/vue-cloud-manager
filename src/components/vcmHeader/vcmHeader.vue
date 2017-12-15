<template>
  <div id="vcm-header">
    <div v-for="item in toolBar" class="horizontal-menu">{{item}}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    toolBar: ['back', 'open', 'rename', 'copy', 'delete']
  })
}
</script>

<style lang="scss">
  @import './vcmHeader.scss'
</style>
