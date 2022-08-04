<template>
  <!-- vue3页面 -->
  <div class="index-container1">
    <div class="index-container-section">
      <div>欢</div>
      <div>迎</div>
      <div>来</div>
      <div>到</div>
      <div>我</div>
      <div>的</div>
      <div>主</div>
      <div>页</div>
    </div>
    <div class="index-container-bar">
      <el-alert title="success alert" type="success" show-icon />
      <el-alert title="info alert" type="info" show-icon />
      <el-alert title="warning alert" type="warning" show-icon />
      <el-alert title="error alert" type="error" show-icon />
    </div>
  </div>
</template>

<script lang='ts'>
import { reactive, ref } from "vue";
export default {
  props: {
    msg: Number,
  },
  setup(props: any, context: any) {
    return {};
  },
};
</script>

<style lang="less" scoped>
.index-container1 {
  display: flex;
  justify-content: space-between;
  .index-container-section {
    width: 100px;
    text-align: center;
    background-image: linear-gradient(#ffcf02, #ff7352);
    background-clip: text;
    -webkit-background-clip: text;
  }
  .index-container-bar {
    flex: 1;
  }
}
</style>