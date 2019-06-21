<template>
  <div>
    <div @click="banner()">banner</div>
    <div v-for="(item,index) in bannerList" :key="index">
      <img :src="item.imageUrl">
    </div>
  </div>
</template>
<script>
import api from "../../api";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  methods: {
    banner() {
      this.axios
        .get(api.getBannerList())
        .then(response => {
          this.bannerList = response.data.banners;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>