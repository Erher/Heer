<template>
  <div class="show-wrapper" id="show_touch">
    <div class="show-nav">
      <ul>
        <li>
          <img src="static/img/s-show.png" class>关注的直播
        </li>
        <li>
          <img src="static/img/s-rank.png" class>排行榜
        </li>
        <li>
          <img src="static/img/s-words.png" class>讨论区
        </li>
        <li>
          <img src="static/img/s-me.png" class>个人中心
        </li>
      </ul>
    </div>
    <div class="show-box">
      <div class="show-img" v-for="item in $store.state.home.index.show" :key="item.sid">
        <img :src="item.img">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let show = document.getElementById("show_touch");
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
    show.addEventListener(
      "touchstart",
      function(ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
      },
      false
    );
    show.addEventListener(
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
            break;
          case "swiperight":
            that.$router.push("/index/topic");
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