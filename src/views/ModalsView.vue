<script setup></script>

<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label for="">show dark modal </label>
      <input v-model="showDarkModal" type="checkbox" />
    </div>
    <button @click="handleShowModal(!showModal)">Show Modal</button>
    <component
      :is="showDarkModal ? ModalDark : Modal"
      v-model="showModal"
      title="My Modal Title prop"
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt in
        beatae suscipit fuga minus laudantium distinctio aspernatur sint, totam
        hic?
      </p>
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';
import ModalDark from '../components/ModalDark.vue';

const showModal = ref(false);
const showDarkModal = ref(false);

function handleShowModal(val) {
  showModal.value = val;
  console.log(showModal);
}
</script>
