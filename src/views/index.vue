
<template>
  <div class="index-container">
    <el-container class="index-container-flex">
      <el-header class="page-header">
        <div class="page-header-reduce">
          <div>欢迎来到我的博客</div>
          <div>
            <template v-for="(item, index) in state.contentList" :key="index">
              <span
                @click="chooseItem(item, index)"
                :class="{ checked: item.isSelected }"
                >{{ item.name }}</span
              >
            </template>
          </div>
        </div>
      </el-header>
      <el-main class="page-main">
        <IndexPage :msg="state.itemIndex"  v-if="state.itemIndex === 0"></IndexPage>
        <LogPage v-if="state.itemIndex === 1"></LogPage>
        <LikePage v-if="state.itemIndex === 2"></LikePage>
        <PhotoPage v-if="state.itemIndex === 3"></PhotoPage>
        <MessagePage v-if="state.itemIndex === 4"></MessagePage>
      </el-main>
      <el-footer class="page-footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { reactive,ref } from "vue";
import { useStore } from "vuex";
import IndexPage from "../components/index.vue";
import LikePage from "../components/like1.vue";
import LogPage from "../components/log.vue";
import MessagePage from "../components/message.vue";
import PhotoPage from "../components/photo.vue";
import index from "../layout/index.vue";
export default {
  components: {
    IndexPage,
    LikePage,
    LogPage,
    MessagePage,
    PhotoPage,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      contentList: [
        { name: "主页", id: 1, isSelected: true },
        { name: "日志", id: 2, isSelected: false },
        { name: "兴趣爱好", id: 3, isSelected: false },
        { name: "相册", id: 4, isSelected: false },
        { name: "留言", id: 5, isSelected: false },
      ],
      itemIndex: 0,
    });
    const chooseItem = (item, index) => {
      item.isSelected = true;
      state.itemIndex = index;
      console.log(state.itemIndex);
    };
    return {
      store,
      state,
      chooseItem,
    };
  },
};
</script>
<style lang="less" scoped>
.index-container {
  height: 100vh;
  .index-container-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100vh;
    .page-header {
      background: linear-gradient(to top right, #e6e6e6, #e9e9e9, #ebebeb);
      height: 80px;
      line-height: 80px;
      padding: 0 20px;
      .page-header-reduce {
        display: flex;
        justify-content: center;
        box-shadow: -1px 0px 0px 0px #3bee17,
          /*左边阴影  绿色*/ 1px 0px 0px 0px #2279ee; /*右边阴影  蓝色*/
        & > div:nth-child(1) {
          font-size: 22px;
        }
        > div:nth-child(2) {
          span {
            margin-left: 10px;
            cursor: pointer;
            color: #ccc;
          }
        }
      }
    }
    .page-main {
      flex: 1;
      padding: 0 20px;
      background: #e6e6e6;
    }
    .page-footer {
      height: 100px;
      line-height: 100px;
      text-align: center;
      background: green;
      padding: 0 20px;
    }
  }
  .checked {
    border-bottom: 1px solid;
    color: rebeccapurple;
  }
}
</style>