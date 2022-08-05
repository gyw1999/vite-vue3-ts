<template>
  <div>
    <!-- 1.计数器案例 -->
    <div>当前计数: {{counter}}</div>
    <div>当前计数*2: {{doubleCounter}}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>
<script>
  import userCounter from '../utlis/useCounter'
  import useTitle from '../utlis/useTitle'
  import { ref, computed ,watch} from 'vue';
  export default {
    setup() {
      const titleRef = useTitle("coder")
      setTimeout(()=>{
        titleRef.value ="whykobe"
      },3000)
      const {counter,doubleCounter,increment,decrement}  = userCounter()

      return {titleRef,counter,doubleCounter,increment,decrement}
    }
  }
</script>
