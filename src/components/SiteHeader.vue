<template>
  <header id="site-header">
    <TopHeader></TopHeader>
    <div id="main-header">
      <div class="row">

        <div id="header-menu" class="col-md-4">
          <div class="col-full">
            <div id="logo-small">
              <img src="../assets/upload/img/logo_small.png" alt="">
            </div>
            <MenuHeader></MenuHeader>
          </div>
        </div>
        <!-- /#header-menu -->
        <div
          class="col-md-8 d-flex justify-content-center vinile-wrap-container"
        >
          <div class="vinile-wrap">
            <img src="../assets/upload/img/vinile.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import MenuHeader from "./MenuHeader.vue";
export default {
  components: {
    TopHeader,
    MenuHeader
},
};
</script>
