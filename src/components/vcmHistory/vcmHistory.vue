<template>
  <div id="vcm-history">
    <vcm-button v-for="btn in buttonList" :key="btn.id" @click.native="show(btn)"><span>{{btn}}</span></vcm-button>
    <div class="vcm-card" v-if="showDetails === true && selectionItem.name">
      <div>Name: {{ selectionItem.name }}</div>
      <div>Created: {{ selectionItem.createDate }} {{ selectionItem.createTime }}</div>
      <div>Modified: {{ selectionItem.modifiedDate }} {{ selectionItem.modifiedTime }}</div>
      <div>Type: {{ selectionItem.format }}</div>
      <div>Owner: {{ selectionItem.owner }}</div>
      <div>Shared: {{ selectionItem.share }}</div>
    </div>
    <div class="vcm-card" v-if="showHistory === true">
      <vcm-button v-for="(item, index) in history" :key="index" v-if="item.action">{{item.action}}: {{item.model.name}}</vcm-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    buttonList: ['Details', 'History'],
    showDetails: true,
    showHistory: false
  }),
  methods: {
    show(btn) {
      switch (btn) {
        case 'Details':
          this.showDetails = true
          this.showHistory = false
          break
        case 'History':
          this.showDetails = false
          this.showHistory = true
          break
        default:
          break
      }
    }
  },
  computed: {
    ...mapGetters([
      'selectionItem',
      'history'
    ])
  }
}
</script>

<style lang="scss">
  @import './vcmHistory.scss'
</style>
