<template>
  <div id="vue-cloud-manager">
    <vcm-header/>
    <main>
      <vcm-tree/>
      <vcm-content/>
      <vcm-history/>
    </main>
    <vcm-footer/>
  </div>
</template>

<script>
import vcmContent from '../vcmContent/vcmContent';
import vcmFooter from '../vcmFooter/vcmFooter';
import vcmHeader from '../vcmHeader/vcmHeader';
import vcmHistory from '../vcmHistory/vcmHistory';
import vcmTree from '../vcmTree/vcmTree';

export default {
  name: 'vue-cloud-manager',
  components: {
    vcmContent,
    vcmFooter,
    vcmHeader,
    vcmHistory,
    vcmTree
  }
};
</script>

<style scoped>
  @import './vueCloudManager.scss';
</style>