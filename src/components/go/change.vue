<script>
export default {
  name: "change",
  data() {
    return {
      level: 1
    };
  },
  render: function(createElement) {
    return createElement("div", [
      createElement("h" + this.level, ["啊啊啊"]),
      createElement(
        "div",
        {
          on: {
            click: this.changeTitle
          }
        },
        "点击改变标题大小"
      )
    ]);
  },
  methods: {
    changeTitle() {
      var patt = /[1-6]/;
      var judge = () => {
        var num = Math.floor(Math.random() * 10 + 1);
        if (patt.test(num) && num != 10) this.level = num;
        else judge();
      };
      judge();
    }
  }
};
</script>