<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2022-08-25 18:31:15
 * @LastEditTime: 2022-11-24 21:53:15
 * @LastEditors: 司马老贼
-->
<template>
    <div class="container">
        <van-nav-bar  @click-left="onClickLeft" :title="title"  left-arrow>

        </van-nav-bar>
    </div>
</template>

<script setup lang="ts">


const onClickLeft = () => history.back();




const  route  = useRoute()
const title =  route.meta.title as string





</script>

<style lang="less" scoped>
 ::v-deep .van-nav-bar__title{
    font-weight: normal;
}
</style>