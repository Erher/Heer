<template>
  <div id="follow">
    <div class="follow-text">最近逛的吧</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item,index) in $store.state.go.go.follow.follow_recently"
          :key="index"
        >
          <div class="follow-bg" :style="{background:item.background}"></div>
          <div class="follow-tag">
            <div class="follow-tag-name">
              <span>{{item.name|capitalize}}</span>
            </div>
            <span class="follow-follow">
              关注
              <span>{{item.follow}}</span>
            </span>
          </div>
          <img :src="item.img">
        </div>
      </div>
    </div>
    <div class="follow-text">关注的吧</div>
    <div
      class="follow-survey"
      v-for="(item,index) in $store.state.go.go.follow.follow_now"
      :key="index"
    >
      <img :src="item.img" class="follow-photo">
      <div class="follow-list">
        <span class="follow-name">{{item.name}}</span>
        <span class="follow-content">{{item.content}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: "1%",
      resistanceRatio: 0,
      freeMode: true
    });
  }
};
</script>

<style scoped>
@import "swiper/dist/css/swiper.min.css";
.swiper-container img {
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 18%;
  left: 32%;
  border: 2px solid white;
  border-radius: 100%;
  z-index: 7;
}
.swiper-slide {
  position: relative;
  width: 8.9rem;
  height: 10rem;
}
.follow-bg {
  width: 96%;
  margin: 0 auto;
  height: 4rem;
  background: pink;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  z-index: 6;
}
.follow-tag {
  text-align: center;
  width: 94%;
  margin: 0 auto;
  height: 5.9rem;
  border: 1px solid #d3d3d3;
  border-top: none;
  box-shadow: 0px 1.5px 5px #d3d3d3;
}
.follow-tag-name {
  padding-top: 18%;
  font-size: 0.9rem;
}
.follow-follow {
  color: #d3d3d3;
  font-size: 0.7rem;
}
</style>