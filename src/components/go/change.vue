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
      this.level = Math.floor(Math.random() * 10 + 1);
    }
  }
};
</script>