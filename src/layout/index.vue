<script>
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router=useRouter()
  
    const gotoTest = (index) => {
      if (index == 1) {
        router.push("/index");
      }
      if (index == 2) {
       router.push("/info");
      }
    };

    return {
      gotoTest,
    };
  },
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-button @click="gotoTest(1)" type="primary">test1</el-button>
        <el-button @click="gotoTest(2)" type="primary">test2</el-button>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>