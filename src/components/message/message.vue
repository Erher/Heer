<template>
  <div>
    <header id="message-header">
      <div>
        <ul>
          <li
            v-for="(title,index) of tabTitle"
            :class="{message_active:cur==index}"
            :key="index"
            @click="tab(index)"
          >{{title}}</li>
          <div
            class="news-replyCount"
            v-show="$store.state.message.message.replyCount"
          >{{$store.state.message.message.replyCount}}</div>
        </ul>
      </div>
      <img src="static/img/chat.png" class="chat">
    </header>
    <div class="message-content">
      <div id="news" v-show="news">
        <div class="news-top">
          <ul>
            <router-link to="/message/news-list" tag="li">
              <img src="static/img/exchange.png">
              <span class="news-text">@我的</span>
              <div
                v-show="$store.state.message.message.replyCount"
              >{{$store.state.message.message.replyCount}}</div>
              <span>></span>
            </router-link>
            <router-link to="/message/like" tag="li">
              <img src="static/img/star.png">
              <span class="news-text">点赞</span>
              <span>></span>
            </router-link>
          </ul>
        </div>
        <news v-for="(item,index) in $store.state.message.message.news" :item="item" :key="index"></news>
      </div>
    </div>
  </div>
</template>
<script>
import news from "./news.vue";
export default {
  components: {
    news
  },
  data() {
    return {
      tabTitle: ["消息", "聊天", "通知"],
      cur: 0,
      news: true,
      newItem: []
    };
  },
  methods: {
    tab(index) {
      this.cur = index;
      switch (index) {
        case 0:
          this.news = true;
          break;
        case 1:
          this.news = false;
          break;
        case 2:
          this.news = false;
          break;
      }
    },
    loadNews() {
      this.axios
        .get("static/data/message/mineNews.json")
        .then(response => {
          var result = response.data.mineNews;
          for (let i in result) {
            this.newItem.push({
              read: result[i].read
            });
          }
          for (let i in this.newItem) {
            if (this.newItem[i].read == false) {
              this.$store.dispatch("addFun");
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.loadNews();
  }
};
</script>
<style>
@import "../../assets/css/message.css";
</style>
