const mixin = {
    mounted() {
        this.$store.commit("setPageName", this.pageName)
    },
    activated() {
        this.$store.commit("setPageName", this.pageName)
    }
}
export default mixin