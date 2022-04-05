import { reactive, computed, watch, nextTick } from 'vue';

function useCounter() {
  const data = reactive({
    count: 0,
    title: 'hi world',
  });

  const oddOrEven = computed(() => {
    if (data.count % 2 === 0) return 'even';
    return 'odd';
  });

  watch(
    () => data.count,
    (newCount) => {
      if (newCount === 20) alert('yah');
    }
  );

  async function increaseCounter(val, e) {
    e.preventDefault();
    data.count += val;
    // does something after the dom updates so right after the last line of code runs and the dom updates from its effect
    await nextTick();
    console.log('do something after adding');
  }
  function decreaseCounter() {
    data.count--;
  }
  return { data, oddOrEven, increaseCounter, decreaseCounter };
}

export default useCounter;
