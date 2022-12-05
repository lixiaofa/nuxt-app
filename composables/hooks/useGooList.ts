/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2022-12-02 15:24:29
 * @LastEditTime: 2022-12-02 16:59:37
 * @LastEditors: 司马老贼
 */
import type { Good } from "@/components/good/type";
import { indexInfos } from "@/composables/api/index";
export const useGooList = () => {
  const list = ref<Good[]>([]);
  const data = reactive({
    page: 1,
    num: 19,
  });
  const loading = ref(false);
  const finished = ref(false);
  const refreshing = ref(false);

  const getIndexInfos = () => {
    indexInfos().then((res) => {
      const { hotGoodses, newGoodses, recommendGoodses } = res.value;
      let goods = hotGoodses.concat(newGoodses, recommendGoodses);
      if (refreshing.value) {
        list.value = [];
        data.page = 1
        refreshing.value = false;
      }
      if (goods.length && data.page < 10) {
       
        list.value = list.value.concat(goods);
        data.page++;
        loading.value = false;
      } else {
        finished.value = true;
      }
    });
  };

  const onLoad = () => {
    
    getIndexInfos();
  };

  const onRefresh = () => {
    // 清空列表数据

    finished.value = false;
  

    // 重新加载数据
    // 将 loading 设置为 true，表示处于加载状态
  
    loading.value = true;
    onLoad();
  };

  return {
    getIndexInfos,
    list,
    refreshing,
    onRefresh,
    loading,
    finished,
    onLoad,
  };
};
