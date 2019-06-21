<template>
  <div class="go-slide" id="go-slide" v-touch:swipeleft="pre" v-touch:swiperight="next">
    <div class="go-box" id="go-box">
      <div
        class="go-list"
        :class="{goCur:item.cur}"
        v-for="(item,index) in $store.state.go.go.goSlide"
        :key="index"
      >
        <img :src="item.img">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    pre() {
      document
        .getElementsByClassName("goCur")[0]
        .previousElementSibling.classList.add("goCur");
      document.getElementsByClassName("goCur")[1].classList.remove("goCur");
      document
        .getElementById("go-box")
        .insertBefore(
          document.getElementById("go-box").lastElementChild,
          document.getElementById("go-box").firstElementChild
        );
    },
    next() {
      document
        .getElementsByClassName("goCur")[0]
        .nextElementSibling.classList.add("goCur");
      document.getElementsByClassName("goCur")[0].classList.remove("goCur");
      document
        .getElementById("go-box")
        .appendChild(document.getElementById("go-box").firstElementChild);
    },
    init() {
      var goBoxWidth =
        this.$store.state.go.go.goSlide.length * 24 +
        1.2 +
        1.7 +
        (this.$store.state.go.go.goSlide.length - 1) * 0.5;
      document.getElementById("go-box").style.width = goBoxWidth + "rem";
    }
  },
  beforeUpdate() {
    this.init();
  },
  directives: {
    touch: {
      bind: function(el, binding) {
        var touchType = binding.arg;
        var direction = "";
        var startX, startY;
        function GetSlideAngle(dx, dy) {
          return (Math.atan2(dy, dx) * 180) / Math.PI;
        }
        function GetSlideDirection(startX, startY, endX, endY) {
          var dy = startY - endY;
          var dx = endX - startX;
          var result = 0;
          if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
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
        el.addEventListener(
          "touchstart",
          function(ev) {
            startX = ev.touches[0].pageX;
            startY = ev.touches[0].pageY;
          },
          false
        );
        el.addEventListener(
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
                if (touchType === "swipeleft") {
                  binding.value();
                }
                break;
              case "swiperight":
                if (touchType === "swiperight") {
                  binding.value();
                }
                break;
              default:
            }
          },
          false
        );
      }
    }
  }
};
</script>


<style>
@import "../../assets/css/go.css";
</style>
