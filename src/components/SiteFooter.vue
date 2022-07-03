<template>
  <div id="site-footer">
    <div id="back-top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33.706"
        height="18.225"
        viewBox="0 0 33.706 18.225"
      >
        <path
          id="Tracciato_6"
          data-name="Tracciato 6"
          d="M1175,488l15.4,15.811L1205.878,488"
          transform="translate(1207.292 504.811) rotate(180)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </div>
    <div class="col-full">
      <div class="row">
        <div class="col-10 offset-md-1">
          <div class="row w-100">
            <div class="col-2">
              <img src="../assets/upload/img/logo_small-white.png" alt="" />
            </div>
            <div class="col-2">
              <MenuHeader></MenuHeader>
            </div>
            <div class="col-4">
              <LeftMenu></LeftMenu>
            </div>
            <div class="col-4">
              <LegalPageMenu></LegalPageMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /#site-footer -->
</template>

<script>
import MenuHeader from "./MenuHeader.vue";
import LeftMenu from "./LeftMenu.vue";
import LegalPageMenu from "./LegalPageMenu.vue";
export default {
  components: {
    MenuHeader,
    LeftMenu,
    LegalPageMenu,
  },
};
</script>

<style>
</style>