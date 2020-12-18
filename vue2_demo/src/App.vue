<template>
  <div id="app">

    <h1 class="aa">
      zhaotaod zzzzz
    </h1>

    <a href="#/user">用户模块</a>
    <a href="#/">主页模块</a>

    <!-- 路由 -->
    <router-view/>


  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  .aa {
    background-color: #42b983;
  }
</style>
