<template>
  <button :class="buttonClass" @click="selection($el)">
    <i v-html="svgContent" v-if="svgContent"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonClass: String,
    svgContent: String
  },
  name: 'vcm-button',
  methods: {
    selection(el) {
      const item = document.querySelectorAll('.toggleBtn')
      item.forEach((element) => { element.classList.remove('toggleBtn') })
      el.classList.add('toggleBtn')
    }
  }
}
</script>

<style lang="scss">
  @import './vcmButton.scss'
</style>
