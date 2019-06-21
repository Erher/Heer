<template>
  <div id="topic_touch">
    <div class="topic-wrapper" v-for="item in $store.state.home.index.topic" :key="item.order">
      <div class="topic-top">
        <span class="topic-order" :style="{background:item.color}">{{item.order}}</span>
        <span class="topic-title">{{item.title}}</span>
        <span class="topic-hot">{{item.hot}}万热度</span>
      </div>
      <div class="topic-box">
        <div class="topic-content">{{item.content}}</div>
        <div class="topic-img">
          <img :src="item.img">
        </div>
      </div>
      <div class="topic-footer">
        <span class="topic_left">必须约</span>
        <span class="topic_right">没必要浪费时间</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let topic = document.getElementById("topic_touch");
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
    topic.addEventListener(
      "touchstart",
      function(ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
      },
      false
    );
    topic.addEventListener(
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
            that.$router.push("/index/show");
            break;
          case "swiperight":
            that.$router.push("/index/home");
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