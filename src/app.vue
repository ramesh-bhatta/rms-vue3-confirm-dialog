<script setup>
import { showDialog } from '@/useDialog';

async function openConfirmDialog() {
  try {
    const result = await showDialog({
      title: 'Delete Item?',
      message: 'Are you sure you want to delete this item?',
      btnConfirmText: 'Yes, Delete',
      btnCancelText: 'Cancel',
      showCloseIcon: true
    });

    console.log('User confirmed:', result);
  } catch (error) {
    console.log('User canceled:', error.message);
  }
}
</script>

<template>
  <button @click="openConfirmDialog">Open Confirm Dialog</button>
</template>
