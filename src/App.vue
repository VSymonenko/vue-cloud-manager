<template>
  <vue-cloud-manager/>
</template>

<script >
import vueCloudManager from './components/vueCloudManager/vueCloudManager'

export default {
  data: () => ({
    sss: {
      id: 0,
      name: 'test-tree',
      createTime: 0,
      createDate: 0,
      modifiedTime: 0,
      modifiedDate: 0,
      children: [{}]
    }
  }),
  components: {
    vueCloudManager
  }
}
</script>

<style lang="scss">
  @import './core/style/style.scss'
</style>
