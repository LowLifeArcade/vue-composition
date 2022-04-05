<script setup>
import { useSlots } from 'vue';
const slots = useSlots();
const props = defineProps({
  title: String,
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

function handleCloseModal(params) {
  emit('update:modelValue', false);
}
</script>

<template>
  <teleport to="#modal">
    <div v-if="modelValue" class="modal-dark">
      <h1>{{ title }}</h1>
      <slot />

      <button @click="handleCloseModal">Hide modal</button>
    </div>
  </teleport>
</template>

<style>
.modal-dark {
  background: #333;
  color: white;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
