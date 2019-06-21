<template>
  <div class="carousel-container">
    <ul class="wrap">
      <li
        class="poster-item"
        v-for="(bk,index) in goodsList"
        :key="index"
        :style="cssList[index]"
        v-touch:swipeleft="pre"
        v-touch:swiperight="next"
      >
        <div class="bkImg">
          <img :src="bk.image">
        </div>
        <div class="bkName">
          <span>《{{bk.goodsName}}》</span>
        </div>
      </li>
    </ul>
    <div class="bkDes">
      <p>{{goodDes}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scal: {
      type: Number,
      default: 0.8
    },
    width: {
      type: Number,
      default: 16
    },
    height: {
      type: Number,
      default: 24
    },
    containerWidth: {
      type: Number,
      default: 27
    },
    fontSize: {
      type: Number,
      default: 1.4
    }
  },
  directives: {
    touch: {
      bind: function(el, binding, vnode) {
        var touchType = binding.arg; //传入的模式 press swipeRight swipeLeft swipeTop swipeDowm Tap
        var timeOutEvent = 0;
        var direction = "";
        //滑动处理
        var startX, startY;

        //返回角度
        function GetSlideAngle(dx, dy) {
          return (Math.atan2(dy, dx) * 180) / Math.PI;
        }

        //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
        function GetSlideDirection(startX, startY, endX, endY) {
          var dy = startY - endY;
          var dx = endX - startX;
          var result = 0;

          //如果滑动距离太短
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

            //判断长按
            timeOutEvent = setTimeout(() => {
              timeOutEvent = 0;
              if (touchType === "press") {
                binding.value();
              }
            }, 500);
          },
          false
        );

        el.addEventListener("touchmove", function(ev) {
          clearTimeout(timeOutEvent);
          timeOutEvent = 0;
        });

        el.addEventListener(
          "touchend",
          function(ev) {
            var endX, endY;
            endX = ev.changedTouches[0].pageX;
            endY = ev.changedTouches[0].pageY;
            direction = GetSlideDirection(startX, startY, endX, endY);

            clearTimeout(timeOutEvent);

            switch (direction) {
              case 0:
                break;
              case "swipeup":
                if (touchType === "swipeup") {
                  binding.value();
                }
                break;
              case "swipedown":
                if (touchType === "swipedown") {
                  binding.value();
                }
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
  },
  data() {
    return {
      goodsList: [
        {
          image: "http://images.bookuu.com/book_t/22/74/04/2274040-m.jpg",
          goodsName: "1",
          goodDes:
            "三毛——华文世界里的传奇女子，足迹遍及世界各地。她以一支笔坚持看守个人文字上的简单和朴素；从遥远的撒哈拉到美洲大陆，再到敦煌戈壁，她不随波逐流，也不诠释人生，只做生活的见证者。她是我们心中浪漫、洒脱、真性情的永远的三毛，永恒的传奇。《万水千山走遍》是荷西去世之后，三毛鼓起生活勇气之作，记录了她在青鸟不到的中南美洲的全新生活。"
        },
        {
          image: "http://images.bookuu.com/book_t/22/74/04/2274040-m.jpg",
          goodsName: "2",
          goodDes:
            "又矮又瘦的女生悟那，因为披散着一头浓密的长发而被叫做墩布姑娘。她整天踩着老掉牙的溜冰鞋到处乱撞。死党图图试图让她剪去长发，没想到一把扯出一个忧伤的大秘密！当悟那还是瓶子妹妹时，遇到了大象哥哥，因为他动不动就被医生往鼻孔里插根粗粗的管子，像老长的大象鼻子。一对被囚禁在病房里的孩子互相加油，每天努力地活下去。可是大象哥哥突然消失，生死未卜，只留下了奇妙的图画书《长发姑娘》。幸运康复的瓶子妹妹怀抱*后的希望，开始漫长漫长的等待。直到有**，大象哥哥忽然现身，瓶子妹妹终于作出了一个闪着泪光的决定……故事贯穿着生命的相聚和别离、拯救和感恩的主题，轻巧透明的故事中流露着沉甸甸的对生命的无比热爱，清澈忧伤，温暖有力，让人热泪盈眶。"
        },
        {
          image: "http://images.bookuu.com/book_t/22/74/04/2274040-m.jpg",
          goodsName: "3",
          goodDes:
            "牛顿出版股份有限公司编著的《小牛顿科学百科(8)》集合**编审阵容，秉持科学传承精神，内容涵盖生物、物理、化学、地理、天文等基础科学，以生动的文字、翔实的全彩解说，将科学融入实验、游戏之中，轻轻松松培养孩子分析推理、综合思考的能力，是学习正规课程、课外自我提升及培养系统科学理念的典范读本!"
        },
        {
          image: "http://images.bookuu.com/book_t/22/74/04/2274040-m.jpg",
          goodsName: "4",
          goodDes:
            "牛顿出版股份有限公司编著的《小牛顿科学百科(8)》集合**编审阵容，秉持科学传承精神，内容涵盖生物、物理、化学、地理、天文等基础科学，以生动的文字、翔实的全彩解说，将科学融入实验、游戏之中，轻轻松松培养孩子分析推理、综合思考的能力，是学习正规课程、课外自我提升及培养系统科学理念的典范读本!"
        },
        {
          image: "http://images.bookuu.com/book_t/22/74/04/2274040-m.jpg",
          goodsName: "3",
          goodDes:
            "牛顿出版股份有限公司编著的《小牛顿科学百科(8)》集合**编审阵容，秉持科学传承精神，内容涵盖生物、物理、化学、地理、天文等基础科学，以生动的文字、翔实的全彩解说，将科学融入实验、游戏之中，轻轻松松培养孩子分析推理、综合思考的能力，是学习正规课程、课外自我提升及培养系统科学理念的典范读本!"
        },
        {
          image: "http://images.bookuu.com/book_t/22/74/04/2274040-m.jpg",
          goodsName: "3",
          goodDes:
            "牛顿出版股份有限公司编著的《小牛顿科学百科(8)》集合**编审阵容，秉持科学传承精神，内容涵盖生物、物理、化学、地理、天文等基础科学，以生动的文字、翔实的全彩解说，将科学融入实验、游戏之中，轻轻松松培养孩子分析推理、综合思考的能力，是学习正规课程、课外自我提升及培养系统科学理念的典范读本!"
        },
        {
          image: "http://images.bookuu.com/book_t/22/74/04/2274040-m.jpg",
          goodsName: "3",
          goodDes:
            "牛顿出版股份有限公司编著的《小牛顿科学百科(8)》集合**编审阵容，秉持科学传承精神，内容涵盖生物、物理、化学、地理、天文等基础科学，以生动的文字、翔实的全彩解说，将科学融入实验、游戏之中，轻轻松松培养孩子分析推理、综合思考的能力，是学习正规课程、课外自我提升及培养系统科学理念的典范读本!"
        },{
          image: "http://images.bookuu.com/book_t/22/74/04/2274040-m.jpg",
          goodsName: "3",
          goodDes:
            "牛顿出版股份有限公司编著的《小牛顿科学百科(8)》集合**编审阵容，秉持科学传承精神，内容涵盖生物、物理、化学、地理、天文等基础科学，以生动的文字、翔实的全彩解说，将科学融入实验、游戏之中，轻轻松松培养孩子分析推理、综合思考的能力，是学习正规课程、课外自我提升及培养系统科学理念的典范读本!"
        },{
          image: "http://images.bookuu.com/book_t/22/74/04/2274040-m.jpg",
          goodsName: "3",
          goodDes:
            "牛顿出版股份有限公司编著的《小牛顿科学百科(8)》集合**编审阵容，秉持科学传承精神，内容涵盖生物、物理、化学、地理、天文等基础科学，以生动的文字、翔实的全彩解说，将科学融入实验、游戏之中，轻轻松松培养孩子分析推理、综合思考的能力，是学习正规课程、课外自我提升及培养系统科学理念的典范读本!"
        },
      ],
      num: 0,
      cssList: [],
      currentIndex: 0,
      goodDes: "",
      index: 0
    };
  },
  created() {
    this.init();
    this.setDefault();
  },
  methods: {
    init() {
      let len = this.goodsList.length;
      if (len % 2 == 0) {
        this.goodsList.copyWithin(len - 1, 0, 1);
        //copyWithin()方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中
        //array.copyWithin(target, start, end)
      }
      this.num = this.goodsList.length;
      this.goodDes = this.goodsList[this.index].goodDes;
      console.log(this.goodsList);
      console.log(this.index);
    },
    setDefault() {
      let obj = {
        zIndex: Math.floor(this.num / 2),
        width: this.width + "rem",
        height: this.height + "rem",
        left: (this.containerWidth - this.width) / 2 + "rem",
        fontSize: this.fontSize + "rem"
      };
      console.log(obj.width);
      console.log(obj.height);
      console.log(this.num );
      console.log(obj.zIndex);
      this.cssList.push(obj);
      var level = Math.floor(this.num / 2);
      //Math.floor() 返回小于或等于一个给定数字的最大整数
      var gap = (this.containerWidth - this.width) / 2 / level; //间距
      var firstLeft = (this.containerWidth - this.width) / 2 + this.width;
      var scalNow = this.scal;
      //右边位置
      for (let i = 1; i < this.num / 2; i++) {
        level--;
        console.log(level);
        var w = this.width * scalNow;
        var h = this.height * scalNow;
        var lf = firstLeft + i * gap - w;
        var fs = this.fontSize * scalNow;
        var css = {
          zIndex: level,
          width: w + "rem",
          height: h + "rem",
          left: lf + "rem",
          top: (this.height - h) / 2 + "rem",
          fontSize: fs + "rem"
        };
        this.cssList.push(css);
        scalNow *= this.scal;
      }
      //左边位置
      for (let i = 1; i < this.num / 2; i++) {
        scalNow /= this.scal;
        var w = this.width * scalNow;
        var h = this.height * scalNow;
        var lf = (i - 1) * gap;
        var fs = this.fontSize * scalNow;
        var css = {
          zIndex: level,
          width: w + "rem",
          height: h + "rem",
          left: lf + "rem",
          top: (this.height - h) / 2 + "rem",
          fontSize: fs + "rem"
        };
        this.cssList.push(css);
        level++;
      }
    },
    next() {
      this.index = ++this.index % this.num;
      console.log("right");
      var pre = this.cssList.shift();
      this.cssList.push(pre);
      this.goodDes = this.goodsList[this.index].goodDes;
    },
    pre() {
      this.index = (--this.index + this.num) % this.num;
      console.log("left");
      var next = this.cssList.pop();
      this.cssList.unshift(next);
    }
  }
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
}
.carousel-container .wrap {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.carousel-container .wrap .poster-item {
  transform: translatez(0);
  width: 1.61rem;
  height: 100%;
  font-size: 0.16rem;
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  transition: all 0.5s;
}
.carousel-container .wrap .poster-item .bkImg {
  width: 100%;
  height: 90%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}
.carousel-container .wrap .poster-item .bkImg img {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
.carousel-container .wrap .poster-item .bkName {
  width: 100%;
  margin-top: 5%;
  text-align: center;
  overflow: hidden;
  text-align: center;
}
.carousel-container .wrap .poster-item .bkName span {
  color: #464c56;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}
.carousel-container .bkDes {
  margin-top: 0.1rem;
  margin-bottom: 0.19rem;
  width: 3.14rem;
  height: 0.41rem;
  left: 50%;
  margin-left: -1.57rem;
  font-size: 0.14rem;
  color: #454c57;
  line-height: 0.21rem;
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>