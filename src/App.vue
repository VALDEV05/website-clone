<template>
  <SiteHeader></SiteHeader>
  <!-- /#site-header -->
  <SiteMain></SiteMain>
  <!-- /#site-main -->
  <!-- /#site-footer -->
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/custom.scss";
</style>
