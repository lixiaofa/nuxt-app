<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-09-07 16:42:00
 * @LastEditTime: 2022-12-15 11:27:06
 * @LastEditors: 司马老贼
-->

<template>
  <div :class="[props.direction ?? 'horizontal']">
    <NuxtLink :to="`/goods/${props.good.goodsId}`">
      <van-card :price="props.good.sellingPrice" :desc="props.good.goodsIntro" :title="props.good.goodsName" :thumb="props.good.goodsCoverImg">
      <template #tags>
          <slot name="tags"></slot>


      </template>
      <template #num>
        <slot name="num"></slot>

      </template>
      <template #footer>
        <slot name="footer"></slot>

      </template>
      


     
    </van-card>

    </NuxtLink>
   
  </div>

</template>


<script setup lang="ts">
import type { Good } from '@/components/good/type'



interface Props {
  good: Good,
  direction?: string 
}
const props = defineProps<Props>()

</script>

<style lang="less" scoped>
.vertical  .van-card{
    height: auto;
  }
.vertical .van-card:not(:first-child){
  margin-top:0px !important;
}
 .vertical   ::v-deep .van-card__header{
  display: block;


}
.vertical ::v-deep  .van-card__content{
  display: block;
}
.horizontal {
  height: 140px;
}

.horizontal .van-card {
  position: absolute;

}
</style>
