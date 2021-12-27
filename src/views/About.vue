<template>
  <div class="about">
    <div class="about-content">
      <div class="about-content-menu">
        <el-menu
          class="el-menu-vertical-demo"
          default-active="map"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <menu-tree :menuData="data"></menu-tree>
        </el-menu>
      </div>
      <div id="box" class="about-content-content">
        <iframe
          :src="url"
          frameborder="0"
          style="width: 100%; height: 100%"
          id="iframeBox"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import aboutData from "@/assets/json/About.json";
import MenuTree from "@/components/example/MenuTree.vue";
export default {
  name: "About",
  components: {
    MenuTree,
  },
  data() {
    return {
      data: aboutData,
      url: "/html/introduction.html",
    };
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case "description":
          this.url = "/html/introduction.html";
          break;
        case "question":
          this.url = "/html/question.html";
          break;
        case "author":
          this.url = "/html/auther.html";
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  min-height: calc(100% - 126px);
  .about-content {
    height: calc(100% - 126px);
    position: absolute;
    width: 100%;
    .about-content-menu {
      float: left;
      width: 201px;
      height: 100%;
      background-color: rgb(84, 92, 100);
      overflow: auto;
      max-height: 100%;
    }
    .about-content-content {
      float: left;
      width: calc(100% - 203px);
      // background-color: rgb(29, 137, 245);
      height: 100%;
    }
  }
}
</style>
