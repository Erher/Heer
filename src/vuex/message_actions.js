const actions = {
    reductionFun(context) {
        context.commit("reduction");
    },
    addFun(context) {
        context.commit("add");
    },
    completeFun(context) {
        context.commit("complete");
    },
    inCompleteFun(context) {
        context.commit("inComplete");
    },
    loadFun(context) {
        context.commit("load");
    }
}
export default actions