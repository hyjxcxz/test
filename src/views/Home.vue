<template>
  <div class="home">
    <HelloWorld msg="二维地图可视化开发平台" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
.home {
  min-height: calc(100% - 126px);
}
</style>
