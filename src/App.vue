<template>
  <SiteHeader></SiteHeader>
  <!-- /#site-header -->
  <!-- /#site-main -->
  <!-- /#site-footer -->
</template>

<script>

import SiteHeader from './components/SiteHeader.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
}
}
</script>

<style lang="scss">
  @import './assets/scss/custom.scss'
</style>
