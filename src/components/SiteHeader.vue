<template>
  <header id="site-header">
    <TopHeader></TopHeader>
    <div id="main-header">
      <div class="vinile-wrap">
      
       <img src="../assets/upload/img/vinile.png" alt="">
      </div>
    </div>
  </header>
</template>

<script>

import TopHeader from './TopHeader.vue';
/* import HeaderAnimation from './HeaderAnimation.vue' */
export default {
  components:{
    TopHeader,
    /* HeaderAnimation */
  }
}
</script>
