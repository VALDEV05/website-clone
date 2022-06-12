<template>
  <SiteHeader></SiteHeader>
  <!-- /#site-header -->
   <main id="site-main">
    main  
  </main>
  <!-- /#site-main -->
   <footer id="site-footer">
    footer  
  </footer>
  <!-- /#site-footer -->
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    SiteHeader
}
}
</script>

<style lang="scss">
  @import url('./assets/scss/custom.scss');
</style>
