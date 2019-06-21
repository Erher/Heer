<template>
  <header id="child-nav">
    <img src="static/img/left.png" class="child-nav_back" @click="$router.go(-1)">
    <span class="child-nav-name">{{$store.state.message.message.currentPageName}}</span>
  </header>
</template>

<style>
@import "../../assets/css/common.css";
</style>