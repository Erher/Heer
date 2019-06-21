const mutations = {
    reduction(state) {
        state.message.replyCount < 1 ? state.message.replyCount = 0 : state.message.replyCount--
    },
    add(state) {
        state.message.replyCount > 99 ? state.message.replyCount = "99+" : state.message.replyCount++
    },
    setPageName(state, name) {
        state.message.currentPageName = name
    },
    complete(state) {
        state.message.newsComplete = true
    },
    inComplete(state) {
        state.message.newsComplete = false
    },
    load(state) {
        state.message.newsComplete = false
    }
}
export default mutations