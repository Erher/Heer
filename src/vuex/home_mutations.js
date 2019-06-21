const mutations = {
    setTop(state, data) {
        if (data.path == "/index/home")
            state.index.top.homeTop = data.top
        else if (data.path == "/index/topic")
            state.index.top.topicTop = data.top
        else if (data.path == "/index/show")
            state.index.top.showTop = data.top
        else
            return;
    }
}
export default mutations