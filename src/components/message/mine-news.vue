<template>
  <div class="mine-news-survey" @click="clickReply()">
    <img :src="item.img" class="mine-news-photo">
    <div class="mine-news-tag">
      <span class="mine-news-name">{{item.name}}</span>
      <span class="mine-news-reply">{{item.reply}}</span>
      <span class="mine-news-time">{{item.time}}</span>
    </div>
    <div class="mine-new-dot" v-show="!read"></div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      read: this.item.read
    };
  },
  methods: {
    clickReply() {
      this.$store.dispatch("reductionFun");
      this.read = true;
    }
  }
};
</script>

<style>
@import "../../assets/css/message.css";
</style>
