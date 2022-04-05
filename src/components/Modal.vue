<script setup>
import { useSlots, inject } from 'vue';
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

const userData = inject('userData')

</script>

<template>
  <teleport to="#modal">
    <div v-if="modelValue" class="modal">
      <h1>{{ title }}</h1>
      <slot />
  <div>
  user name is {{ userData.userName}}
  </div>
      <button @click="handleCloseModal">Hide modal</button>
    </div>
  </teleport>
</template>

<style>
.modal {
  background: beige;
  color: black;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
