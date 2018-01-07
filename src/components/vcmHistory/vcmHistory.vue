<template>
  <div id="vcm-history">
    <vcm-tabs>
      <vcm-button v-for="btn in buttonList" :key="btn.id" @click.native="show(btn)" button-class="vcm-tabs-button"><span>{{btn}}</span></vcm-button>
    </vcm-tabs>
    <transition name="slide-fade">
    <div class="vcm-card" v-show="showDetails === true && selectionItem.name">
      <div>Name: {{ selectionItem.name }}</div>
      <div>Created: {{ selectionItem.createDate }} {{ selectionItem.createTime }}</div>
      <div>Modified: {{ selectionItem.modifiedDate }} {{ selectionItem.modifiedTime }}</div>
      <div>Type: {{ selectionItem.format }}</div>
      <div>Owner: {{ selectionItem.owner }}</div>
      <div>Shared: {{ selectionItem.share }}</div>
    </div>
    </transition>
    <transition name="slide-fade">
    <div class="vcm-card-history" v-show="showHistory === true">
      <div v-for="(item, index) in history" :key="index" v-if="item.action" style="display: flex;">
        <span>{{item.action}}:</span>
        <vcm-button button-class="vcm-action-button">{{item.model.name}}</vcm-button>
      </div>
    </div>
  </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vcmTabs from './../vcmTabs/vcmTabs'

export default {
  components: {
    vcmTabs
  },
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
