<template>
  <div>
    <childNav></childNav>
    <div class="child-content">
      <mineNews v-for="(item,index) in newItem" :item="item" :key="index"></mineNews>
    </div>
    <section class="news-load-more" v-show="loadList">
      <div class="news-status-loading">
        <div class="news-dots">
          <span class="news-dot"></span>
          <span class="news-dot"></span>
          <span class="news-dot"></span>
        </div>
        <span class="news-info">嘿咻嘿咻加载中</span>
      </div>
    </section>
    <div class="none" v-show="$store.state.message.message.newsComplete">已没有更多内容...</div>
  </div>
</template>
<script>
import mineNews from "./mine-news.vue";
import childNav from "../common/child-nav.vue";
export default {
  data() {
    return {
      newItem: [],
      pageName: "@我的",
      num: 11,
      loadList: true,
      timer: false
    };
  },
  mixins: [window.mixin],
  components: {
    mineNews,
    childNav
  },
  created() {
    this.loadNews();
  },
  mounted() {
    var that = this;
    window.addEventListener(
      "scroll",
      function() {
        var scrollTop = 0;
        var clientHeight = 0;
        var scrollHeight = 0;
        scrollTop = Math.max(
          document.documentElement.scrollTop,
          document.body.scrollTop
        );
        clientHeight = document.documentElement.clientHeight;
        scrollHeight = Math.max(
          document.documentElement.scrollHeight,
          document.documentElement.clientHeight
        );
        if (Math.floor(scrollTop + clientHeight + 1) >= scrollHeight) {
          that.add();
        }
      },
      false
    );
  },
  methods: {
    add() {
      this.loadNews();
    },
    loadNews() {
      this.loadList = true;
      this.$store.dispatch("inCompleteFun");
      var simulation = () => {
        this.axios
          .get("static/data/message/mineNews.json")
          .then(response => {
            this.$store.dispatch("loadFun");
            var result = response.data.mineNews.slice(this.num - 11, this.num);
            for (let i in result) {
              this.newItem.push({
                name: result[i].name,
                reply: result[i].reply,
                time: result[i].time,
                read: result[i].read,
                img: result[i].img
              });
            }
            if (result.length !== 0) {
              this.num += 11;
              this.loadList = false;
            } else {
              this.$store.dispatch("completeFun");
              this.loadList = false;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      };
      const throttle = fn => {
        if (this.timer) {
          return;
        }
        this.timer = setTimeout(() => {
          fn();
          this.timer = null;
        }, 2000);
      };
      throttle(simulation);
    }
  }
};
</script>

<style scoped>
.none {
  text-align: center;
  padding: 3% 0;
  color: #999;
  font-size: 0.6rem;
}

.news-load-more {
  text-align: center;
  padding-top: 3%;
  padding-bottom: 3%;
  color: #9a9a9a;
  font-size: 0.6rem;
}
.news-load-more .news-status-loading {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  display: inline-block;
}
.news-load-more .news-status-loading .news-dots {
  margin: 0;
  padding: 0;
  text-align: center;
  display: inline-block;
}
.news-load-more .news-status-loading .news-dots .news-dot {
  display: inline-block;
  vertical-align: middle;
  width: 5px;
  height: 5px;
  background-color: #7a8090;
  border-radius: 50%;
  margin: 0 3px;
}
.news-load-more .news-status-loading .news-dots .news-dot:nth-of-type(1) {
  background-color: #7a8090;
  animation: dot 1s ease-in infinite;
}
.news-load-more .news-status-loading .news-dots .news-dot:nth-of-type(2) {
  background-color: rgba(122, 128, 144, 0.6);
  animation: dot 1s ease-in 0.3s infinite;
}
.news-load-more .news-status-loading .news-dots .news-dot:nth-of-type(3) {
  background-color: rgba(122, 128, 144, 0.3);
  animation: dot 1s ease-in 0.7s infinite;
}
@keyframes dot {
  25% {
    border-color: #7a8090;
    background-color: transparent;
  }
  50% {
    border-right-color: transparent;
    background-color: #7a8090;
  }
  75% {
    border-right-color: rgba(122, 128, 144, 0.3);
  }
}
.news-load-more .news-status-loading .news-dots .news-info {
  display: inline-block;
  vertical-align: middle;
}
</style>