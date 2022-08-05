<template>
  <div>
    <h4>{{info.name}}</h4>
    <h1>{{changeNum}}</h1>
    <button @click="changeName">改变name</button>
    <button @click="changeNumer">改变计数器的值</button>
  </div>
</template>

<script>
  import { reactive,watch,computed } from 'vue';

  export default {
    setup() {
      const info = reactive({
        name:"coderwhy",
        age:22,
        num:1,
        hoboy:{
          active:'play basketball'
        }
      })
      // watch属性监听
      watch(()=> [info.name,info.age,info.hoboy],(newValue,oldValue)=>{
        console.log('nv',newValue,'ov',oldValue);
        },
        {deep:true,
        immediate:true}
      )
      const changeNum = computed({
        get(){
          return info.num
        },
        set(val){
          info.num = val
        }
      })
      const changeName  = ()=>{
        info.name = 'kobe'
        info.hoboy.active1 = 'play footerball'
      }
      const changeNumer = ()=>{
        info.num +=2
      }
      return {
        changeName,
        changeNumer,
        changeNum,
        info
      }
    }
  }
</script>