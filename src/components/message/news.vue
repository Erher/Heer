<template>
  <div>
    <div class="news-box">
      <div class="news-survey">
        <img :src="item.img" class="news-photo">
        <div class="news-tag">
          <span class="news-name">{{item.name}}</span>
          <span class="news-time">{{item.time}}</span>
        </div>
      </div>
      <div class="news-reply">{{item.reply}}</div>
      <div class="news-quiz">{{item.quiz}}</div>
      <div class="news-footer">
        <span class="news_left">{{item.tag}}</span>
        <span class="news_right">回复</span>
        <img src="static/img/words.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>


<style>
@import "../../assets/css/message.css";
</style>
