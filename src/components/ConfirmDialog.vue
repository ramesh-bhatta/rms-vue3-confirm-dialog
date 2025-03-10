<template>
  <!-- Modal overlay with click listener for closing the dialog -->
  <div class="rms-dialog-overlay is-flex is-justify-content-center is-align-items-center " @click="handleOverlayClick">
    <!-- Modal content, prevent click propagation inside the modal -->
    <div :class="'rms-dialog-box has-text-centered  ' + dialogBoxClasses" :style="{ minWidth: dialogBoxMinWidth }"
      @click.stop>
      <!-- Close button in the top-right corner -->
      <button v-if="showCloseIcon" class="delete is-pulled-right m-2" @click="cancel"></button>

      <div class="rms-dialog-box-content box px-4 py-6">
        <h2 class="title">{{ title }}</h2>
        <p class="mb-4">{{ message }}</p>

        <!-- Bulma's button classes for action buttons -->
        <div class="buttons is-centered mt-6">
          <button @click="cancel" :class="'button ' + btnCancelClasses">
            {{ btnCancelText }}
          </button>
          <button @click="confirm" :class="'button ' + btnConfirmClasses">
            {{ btnConfirmText }}
          </button>
        </div>
      </div>

    </div>
  </div>


</template>

<script setup>
import { defineProps } from 'vue'

// Define properties passed into the dialog component
const props = defineProps({
  title: { type: String, default: '' },
  message: { type: String, default: '' },
  btnConfirmText: { type: String, default: 'OK' },
  btnCancelText: { type: String, default: 'Cancel' },
  onConfirm: { type: Function, required: true },
  onCancel: { type: Function, required: true },
  dialogBoxMinWidth: { type: String, default: '300px' },
  dialogBoxClasses: { type: String, default: ' has-background-primary' },
  btnConfirmClasses: { type: String, default: ' is-primary is-outlined' },
  btnCancelClasses: { type: String, default: ' is-danger is-outlined' },
  showCloseIcon: { type: Boolean, default: true }
})

// Method for confirming the action
function confirm() {
  // props.onConfirm('OK')
  props.onConfirm(true)
}

// Method for canceling the action
function cancel() {
  props.onCancel()
}

// Method to handle click outside the modal content to close it
function handleOverlayClick() {
  props.onCancel()
}
</script>

<style scoped>
.rms-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  /* Bulma-style dimmed overlay */
  z-index: 9999;
}

.rms-dialog-box {
  border-radius: 1rem;
}
</style>
