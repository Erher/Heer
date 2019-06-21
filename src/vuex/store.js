import Vue from 'vue'
import Vuex from 'vuex'
import home_module from "./home_module"
import go_module from "./go_module"
import message_module from "./message_module"

Vue.use(Vuex)
export default new Vuex.Store({
    modules: { home: home_module, go: go_module, message: message_module, }
})