<template>
  <div>
    <childNav></childNav>
    <div class="like-wrapper">
      <div class="like-box">
        <div class="like-survey">
          <img
            src="http://b-ssl.duitang.com/uploads/item/201712/31/20171231204315_t5ZSz.jpeg"
            class="like-photo"
          >
          <div class="like-tag">
            <span class="like-name">花花</span>
            <span class="like-time">2019-05-02</span>
          </div>
        </div>
        <div class="like-reply">赞了我的回复</div>
        <div class="like-title">让他帮你：特人和他和他关闭儿童日报</div>
        <div class="like-quiz">
          <div class="like-quiz-img">
            <img src="http://b-ssl.duitang.com/uploads/item/201712/31/20171231204315_t5ZSz.jpeg">
          </div>
          <div class="like-quiz-content">一类：认同不认同让他把</div>
        </div>
        <div class="like-footer">
          <span class="like_left">switch吧</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import childNav from "../common/child-nav.vue";
export default {
  data() {
    return {
      pageName: "点赞"
    };
  },
  mixins: [window.mixin],
  components: {
    childNav
  }
};
</script>

<style>
@import "../../assets/css/message.css";
</style>