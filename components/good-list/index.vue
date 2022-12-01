<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-07 16:41:23
 * @LastEditTime: 2022-12-01 10:01:45
 * @LastEditors: 司马老贼
-->
<template>
  <div class="container">

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

      
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div  v-for="good in props.goodList" :key="good.goodsId">
          <slot :good="good" ></slot> 
        </div>
        
      </van-list>
    </van-pull-refresh>

  </div>
</template>


<script setup lang="ts">
// import {indexInfos} from '@/composables/api/index'
interface Good{
  goodsId: number,
  goodsName: string,
  goodsIntro: string,
  goodsCoverImg: string
  sellingPrice: number,
  tag: string


}
interface Props{
  goodList: Good[]
}



const props = defineProps<Props>()


let list = ref([]);
const data = reactive({
  page: 1 , 
  
})
const loading = ref(true);
const finished = ref(true);
const refreshing = ref(true);

const onLoad = () => {
  
  // indexInfos().then((res) => {
    
    // const { hotGoodses , newGoodses , recommendGoodses } = res.data
    // const goodList =  [...hotGoodses , ...newGoodses , ...recommendGoodses]
    // if(goodList.length){
    //   list.value = list.value.concat(goodList)
    //    data.page++
    //    loading.value = false;
    // }else{
    //   finished.value = true;
    // }
    
    

  // })
};

const onRefresh = () => {

  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};

</script>

<style lang="less" scoped>
::v-deep .van-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2 , 49%) ;
  grid-gap: 10px;
  // grid-auto-flow: row dense; 
  grid-template-rows: masonry;
  
}

::v-deep .van-list__loading,
::v-deep .van-list__finished-text {
  width: 100vw;
}

</style>
