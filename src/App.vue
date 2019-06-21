<template>
  <div id="app">
    <welcome></welcome>
    <div class="app-wrapper" v-show="showDefault">
      <div class="app-content">
        <keep-alive exclude="me">
          <router-view name="default"></router-view>
        </keep-alive>
      </div>
      <footer class="app-footer">
        <he-nav></he-nav>
      </footer>
    </div>
    <router-view name="subPage"></router-view>
  </div>
</template>

<script>
import welcome from "./components/common/welcome.vue";
import heNav from "./components/common/he-nav.vue";
import mixin from "./vuex/mixin.js";
window.mixin = mixin;
export default {
  name: "App",
  data() {
    return {
      showDefault: true
    };
  },
  components: {
    welcome,
    heNav
  },
  created() {
    this.$router.push("/");
  },
  watch: {
    $route() {
      if (this.$route.name.split("/").length == 2) this.showDefault = true;
      else this.showDefault = false;
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/common.css";
@import "assets/css/animate.css";
</style>
