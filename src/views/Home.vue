<template>
  <div class="home">
    <div class="home-main">
      <HelloWorld msg="二维地图可视化开发平台" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.home {
  min-height: calc(100% - 72px);
  .home-main {
    height: calc(100% - 56px);
  }
}

.footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
