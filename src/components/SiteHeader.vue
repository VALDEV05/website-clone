<template>
  <header id="site-header">
    <TopHeader></TopHeader>
    <HeaderAnimation></HeaderAnimation>
  </header>
</template>

<script>
import TopHeader from './TopHeader.vue';
import HeaderAnimation from './HeaderAnimation.vue'
export default {
  components:{
    TopHeader,
    HeaderAnimation
  }
}
</script>
