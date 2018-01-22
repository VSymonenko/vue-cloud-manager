<template>
  <transition name="vcm-modal">
    <div class="vcm-modal-mask">
      <div class="vcm-modal-wrapper">
        <div class="vcm-modal-container">

          <div class="vcm-modal-header">
            <slot name="vcm-header"></slot>
          </div>
  
          <div class="vcm-modal-body">
            <slot name="vcm-body"></slot>
          </div>

          <div class="vcm-modal-footer">
            <slot name="vcm-footer">
              <vcm-button class="vcm-modal-default-button" @click.native="$emit('close')">
                OK
              </vcm-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import './vcmForm.scss'
</style>
