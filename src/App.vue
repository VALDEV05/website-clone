<template>
  <SiteHeader></SiteHeader>
  <!-- /#site-header -->
   <main id="site-main">
    <div class="btn btn-primary">main</div>
  </main>
  <!-- /#site-main -->
   <footer id="site-footer">
    footer  
  </footer>
  <!-- /#site-footer -->
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'

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
