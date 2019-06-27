<template>
  <div id="hog-page">
    <header id="hog-header">
      <div>
        <ul>
          <li
            v-for="(title,index) of tabTitle"
            :class="{active:cur==index}"
            :key="index"
            @click="tab(index)"
          >{{title}}</li>
          <li class="tag_right">
            <img src="static/img/track.png">
          </li>
        </ul>
      </div>
    </header>
    <!-- <carousel></carousel> -->
    <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft">
      <div v-show="follow">
        <follow @click.native="listener"></follow>
      </div>
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animated fadeInRight">
      <div v-show="goSlide">
        <!-- <goSlide></goSlide> -->
        <change></change>
      </div>
    </transition>
  </div>
</template>
<script>
import carousel from "./carousel.vue";
import follow from "./follow.vue";
import goSlide from "./go-slide.vue";
import change from "./change.vue";
export default {
  components: {
    carousel,
    follow,
    goSlide,
    change
  },
  data() {
    return {
      tabTitle: ["关注", "推荐"],
      cur: 0,
      follow: true,
      goSlide: false
    };
  },
  methods: {
    listener() {
      console.log("listener");
    },
    tab(index) {
      this.cur = index;
      switch (index) {
        case 0:
          this.follow = true;
          this.goSlide = false;
          break;
        case 1:
          this.follow = false;
          this.goSlide = true;
          break;
      }
    }
  }
};
</script>

<style>
@import "../../assets/css/go.css";
</style>
