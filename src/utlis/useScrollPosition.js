// 自定义 useScrollPosition Hook函数
import { ref, computed,onMounted} from "vue";
export default function useScrollPosition() {
    const scrollX = ref(0);
    const scrollY = ref(0);
  
    document.addEventListener("scroll", () => {
      scrollX.value = window.scrollX;
      scrollY.value = window.scrollY;
    });
  
    return {scrollX, scrollY} // 返回ref响应式数据
}