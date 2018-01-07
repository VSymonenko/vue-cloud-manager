<template>
  <button :class="buttonClass">
    <i v-html="svgContent" v-if="svgContent"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonClass: String,
    svgContent: String
  }
}
</script>

<style lang="scss">
  @import './vcmButton.scss'
</style>
