<template>
  <div id="home_touch">
    <div class="home-wrapper" v-for="item in $store.state.home.index.home" :key="item.hid">
      <div class="home-top">
        <img :src="item.photo" class="home-photo">
        <span class="home-name">{{item.name}}</span>
        <img src="static/img/home-close.png" class="home-close">
      </div>
      <div class="home-box">
        <div class="home-content">{{item.content}}</div>
        <div class="home-img">
          <img :src="item.picture">
        </div>
      </div>
      <div class="home-tag">
        <span :style="{background:item.color}">{{item.tag}}</span>
      </div>
      <div class="home-footer">
        <div>
          <span class="home_left">
            <img src="static/img/share.png">
            <span>分享</span>
          </span>
          <span class="home_left">
            <img src="static/img/words.png" alt>
            <span>{{item.words}}</span>
          </span>
          <div class="home_right">
            <img class="home-dislike" src="static/img/dislike.png">
            <span>
              <span>{{item.like}}</span>
              <img src="static/img/like.png">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  mounted() {
    let home = document.getElementById("home_touch");
    const that = this;
    var direction = "";
    var startX, startY;
    function GetSlideAngle(dx, dy) {
      return (Math.atan2(dy, dx) * 180) / Math.PI;
    }
    function GetSlideDirection(startX, startY, endX, endY) {
      var dy = startY - endY;
      var dx = endX - startX;
      var result = 0;
      if (Math.abs(dx) < 100 && Math.abs(dy) < 100) {
        return result;
      }
      var angle = GetSlideAngle(dx, dy);
      if (angle >= -45 && angle < 45) {
        result = "swiperight";
      } else if (angle >= 45 && angle < 135) {
        result = "swipeup";
      } else if (angle >= -135 && angle < -45) {
        result = "swipedown";
      } else if (
        (angle >= 135 && angle <= 180) ||
        (angle >= -180 && angle < -135)
      ) {
        result = "swipeleft";
      }
      return result;
    }
    home.addEventListener(
      "touchstart",
      function(ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
      },
      false
    );
    home.addEventListener(
      "touchend",
      function(ev) {
        var endX, endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        direction = GetSlideDirection(startX, startY, endX, endY);
        switch (direction) {
          case 0:
            break;
          case "swipeup":
            break;
          case "swipedown":
            break;
          case "swipeleft":
            that.$router.push("/index/topic");
            break;
          case "swiperight":
            break;
          default:
        }
      },
      false
    );
  }
};
</script>

<style>
@import "../../assets/css/home.css";
</style>