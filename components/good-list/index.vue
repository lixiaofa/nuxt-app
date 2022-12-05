<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-07 16:41:23
 * @LastEditTime: 2022-12-02 16:29:40
 * @LastEditors: 司马老贼
-->
<template>
  <div class="container">


    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="good in list" :key="good.goodsId">
          <slot :good="good"></slot>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script setup lang="ts">
import { useGooList } from '@/composables/hooks/useGooList'

const {   
  getIndexInfos,
  list,
  refreshing,
  onRefresh,
  loading,
  finished,
  onLoad } = useGooList()

  //服务端加载数据
  getIndexInfos()
</script>

<style lang="less" scoped>
::v-deep .van-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 49%);
  grid-gap: 10px;
  // grid-auto-flow: row dense; 
  grid-template-rows: masonry;

}

::v-deep .van-list__loading,
::v-deep .van-list__finished-text {
  width: 100vw;
}
</style>
