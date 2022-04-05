<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ something.hello }}</h3>
    <div>
      <button @click="increaseCounter(2, $event)" class="btn">+</button>
      <span class="counter">{{ data.count }}</span>
      <button @click="decreaseCounter" class="btn">-</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit Counter Title</h4>
      <input v-model="something.hello" type="text" v-autofocus />
    </div>
  </div>
</template>
v
<script setup>
/**
 * imports
 */
import { ref, reactive, onMounted } from 'vue';
import useCounter from '../use/useCounter';
import { vAutofocus } from '../directives/vAutofocus';

/**
 * counter stuff
 */
const { data, oddOrEven, increaseCounter, decreaseCounter } = useCounter();

const appTitleRef = ref(null);

const something = reactive({ hello: 'hi' });
console.log('something', typeof something);

// const count = ref(0);
// const counterTitle = ref('My Counter');

/**
 * app title code
 */
const appTitle = 'My ok counter app';

onMounted(() => {
  console.log('Do stuff related to app title');
});

// teleport is similar to portal in react

// onMounted(() => {
//   console.log('Do stuff related to counter');
// });

// onBeforeMount(() => {
//   console.log('on before mount');
// });
// onMounted(() => {
//   console.log('on mount');
// });

// onBeforeUnmount(() => {
//   console.log('on before unmount');
// });

// onUnmounted(() => {
//   console.log('on unmount');
// });

// onActivated(() => console.log('yo'));
// onDeactivated(() => console.log('deactivated'));
</script>

<!--
<script>
export default {
  directives: {
    autofocus: {
      mounted(el) {
        el.focus();
      },
    },
  },
};
</script>
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn,
.counter {
  font-size: 20px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>
