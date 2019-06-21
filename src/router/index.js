import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: "/index",
    component: resolve => require(["../components/home/index.vue"], resolve),
    redirect: '/index/home'
  }, {
    path: '/index',
    component: resolve => require(["../components/home/index.vue"], resolve),
    children: [
      {
        path: '',
        component: resolve => require(["../components/home/index.vue"], resolve)
      },
      {
        path: 'home',
        name: "/home",
        component: resolve => require(["../components/home/home.vue"], resolve),
      },
      {
        path: 'topic',
        name: "/topic",
        component: resolve => require(["../components/home/topic.vue"], resolve),
      },
      {
        path: 'show',
        name: "/show",
        component: resolve => require(["../components/home/show.vue"], resolve),
      }
    ]
  }, {
    path: '/go',
    name: "/go",
    component: resolve => require(["../components/go/go.vue"], resolve)
  }, {
    path: '/message',
    name: "/message",
    component: resolve => require(["../components/message/message.vue"], resolve)
  }, {
    path: '/message/news-list',
    name: "/message/news-list",
    components: {
      "default": resolve => require(["../components/message/message.vue"], resolve),
      "subPage": resolve => require(["../components/message/news-list.vue"], resolve)
    }
  }, {
    path: '/message/like',
    name: "/message/like",
    components: {
      "default": resolve => require(["../components/message/message.vue"], resolve),
      "subPage": resolve => require(["../components/message/like.vue"], resolve)
    }
  }, {
    path: '/me',
    name: "/me",
    component: resolve => require(["../components/me/me.vue"], resolve)
  }]
const router = new Router({
  base: "/heer/",
  routes
})
router.beforeEach((to, from, next) => {
  //pc
  let top = document.documentElement.scrollTop;
  //app
  /* let top = document.body.scrollTop; */
  store.commit("setTop", { path: from.path, top: top });
  next();
})
router.afterEach((to, from) => {
  //pc
  if (to.path == "/index/home") {
    setTimeout(() => {
      document.documentElement.scrollTo(
        0,
        store.state.home.index.top.homeTop
      );
    }, 0);
  }
  else if (to.path == "/index/topic") {
    setTimeout(() => {
      document.documentElement.scrollTo(
        0,
        store.state.home.index.top.topicTop
      );
    }, 0);
  }
  else if (to.path == "/index/show") {
    setTimeout(() => {
      document.documentElement.scrollTo(
        0,
        store.state.home.index.top.showTop
      );
    }, 0);
  }
  else
    return;
  //app
  /* if (to.path == "/index/home") {
    setTimeout(() => {
      document.body.scrollTo(
        0,
        store.state.home.index.top.homeTop
      );
    }, 0);
  }
  else if (to.path == "/index/topic") {
    setTimeout(() => {
      document.body.scrollTo(
        0,
        store.state.home.index.top.topicTop
      );
    }, 0);
  }
  else if (to.path == "/index/show") {
    setTimeout(() => {
      document.body.scrollTo(
        0,
        store.state.home.index.top.showTop
      );
    }, 0);
  }
  else
    return; */
})
export default router