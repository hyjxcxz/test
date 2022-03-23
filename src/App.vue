<template>
  <div id="app">
    <div id="nav" class="nav">
      <div class="logo">
        <img alt="Vue logo" src="./assets/img/logo.svg" />
        <span>&nbsp;&nbsp;&nbsp;GW-GIS</span>
      </div>
      <div class="menue">
        <router-link to="/">首页</router-link> |
        <router-link to="/guide">指南</router-link> |
        <router-link to="/interface">API</router-link> |
        <router-link to="/example">示例</router-link> |
        <router-link to="/about">关于</router-link>
      </div>
    </div>
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>
<script>
// import Footer from "@/components/Footer.vue";
export default {
  components: {
    // Footer,
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
 ::-webkit-scrollbar {
      display: none;
   }
#nav {
  padding: 0;
  height: 70px;
  line-height: 70px;
  box-shadow: 10px 10px 5px #a4cffcbd;
  border-bottom: 1px solid #d6dadca8;
  // border: 1px solid #00e0f9;
  .logo {
    width: 50%;
    float: left;
    img {
      float: left;
      padding: 5px;
      height: 60px;
    }
    span {
      float: left;
      font-size: 20px;
      font-weight: 900;
    }
  }
  .menue {
    width: 50%;
    float: right;
    text-align: right;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
