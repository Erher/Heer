<template>
  <div id="payPwd">
    <div class="payPwd-title">支付密码设置</div>
    <input ref="pwd" maxlength="6" v-model="msg">
    <!--<input ref="pwd" type="password" maxlength="6" v-model="msg">-->
    <ul class="payPwd-wrap" @click="focus">
      <li>
        <i v-if="msgLength > 0">{{one}}</i>
      </li>
      <li>
        <i v-if="msgLength > 1">{{two}}</i>
      </li>
      <li>
        <i v-if="msgLength > 2">{{three}}</i>
      </li>
      <li>
        <i v-if="msgLength > 3">{{four}}</i>
      </li>
      <li>
        <i v-if="msgLength > 4">{{five}}</i>
      </li>
      <li>
        <i v-if="msgLength > 5">{{six}}</i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "me",
  components: {},
  data() {
    return {
      msg: "",
      msgLength: 0,
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: ""
    };
  },
  watch: {
    msg(curVal) {
      if (/[^\d]/g.test(curVal)) {
        this.msg = this.msg.replace(/[^\d]/g, "");
      } else {
        this.msgLength = curVal.length;
        var content = curVal.split("");
        this.one = content[0];
        this.two = content[1];
        this.three = content[2];
        this.four = content[3];
        this.five = content[4];
        this.six = content[5];
      }
    }
  },
  methods: {
    focus() {
      this.$refs.pwd.focus();
    }
  },
  mounted() {
    this.focus();
  }
};
</script>

<style scoped>
.payPwd-title {
  text-align: center;
  margin: 5% 0;
}
#payPwd input {
  position: absolute;
  z-index: -1;
  left: -100%;
  opacity: 0;
}
#payPwd .payPwd-wrap {
  width: 90%;
  height: 4rem;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #ddd;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.payPwd-wrap li {
  text-align: center;
  line-height: 4rem;
  -webkit-box-flex: 1;
  flex: 1;
  -webkit-flex: 1;
  border-right: 1px solid #ddd;
}
.payPwd-wrap li:last-child {
  border-right: 0;
}
/*
.payPwd-wrap li i {
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  background: #000;
  display: inline-block;
}
*/
</style>
