<template>
  <div>
    <p id="dom"  style="width: 3000px; height: 5000px">
      width:3000px height:5000px的，模拟页面滚动
    </p>
    <div style="position: fixed; top: 20px; right: 20px">
      <div>scrollX: {{ scrollX }}</div>
      <div>scrollY: {{ scrollY }}</div>
    </div>
  </div>
</template>

<script>
import { ref, computed,onMounted} from "vue";
import useScrollPosition from '../utlis/useScrollPosition'
export default {
  setup() {
    // 3.监听页面滚动
    const { scrollX, scrollY } = useScrollPosition();
    return {
      scrollX,
      scrollY,
    };
  },
};
</script>