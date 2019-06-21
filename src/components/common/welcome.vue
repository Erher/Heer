<template>
  <div class="welcome" :class="{hide:hide}">
    <img src="https://game.gtimg.cn/images/mxd2/act/a20170808mobiletest/loading.jpg">
  </div>
</template>
<script>
export default {
  data() {
    return { hide: false };
  },
  mounted() {
    setTimeout(() => {
      this.hide = true;
    }, 0);
  }
};
</script>
<style scoped>
.welcome {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  z-index: 10;
}
.welcome img {
  width: 100%;
  height: 100%;
}
.welcome.hide {
  opacity: 0;
  visibility: hidden;
}
</style>
