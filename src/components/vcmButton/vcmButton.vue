<template>
  <button class="vcm-tree-folder" @click="selection($el)">
    <div class="vcm-icon"></div>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: { ...mapGetters([
    'icon'
  ]),
    srcSVG() {
      return this.iconSVG
    }
  },
  props: {
    iconSVG: '',
    buttonName: ''
  },
  name: 'vcm-button',
  methods: {
    selection(el) {
      const item = document.querySelectorAll('.toggleBtn')
      item.forEach((element) => { element.classList.remove('toggleBtn') })
      el.classList.add('toggleBtn')
    },
    /* eslint-disable no-unused-vars  */
    loadSVG(el) {
      /* eslint-disable no-new  */
      new Promise((resolve, reject) => {
        const span = '<span class="btnText">&nbsp;' + this.buttonName + '</span>'
        const appendName = '&nbsp;' + this.buttonName
        /* eslint-disable no-unused-vars  */
        function processData(data) {
          const node = document.querySelector('.vcm-icon')
          const parentNode = node.parentNode
          parentNode.innerHTML = data + span
        }
        function handler() {
          if (this.status === 200 &&
            this.responseXML != null &&
            this.responseText) {
            if (el) {
              el.innerHTML = this.responseText
            } else {
              processData(this.responseText)
            }
            resolve(true)
          } else {
            const error = 'Something error with svg handler'
            reject(this.error)
          }
        }
        const xhr = new XMLHttpRequest()
        xhr.onload = handler
        xhr.open('GET', this.srcSVG)
        xhr.send()
      })
    }
  },
  mounted() {
    this.loadSVG()
  }
}
</script>

<style lang="scss">
  @import './vcmButton.scss'
</style>
