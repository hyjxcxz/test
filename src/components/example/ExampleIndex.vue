<template>
  <div class="example-content">
    <div class="example-content-menu">
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
    <div id="map" class="example-content-instruction"></div>
  </div>
</template>
<script>
import Examplemenudata from "@/assets/json/Example-menu.json";
import MenuTree from "@/components/example/MenuTree.vue";
import { Map } from "../../utils/map";
import BaseLayer from "@/components/example/map/baseLayers/BaseLayers";
export default {
  name: "ExampleIndex",
  components: {
    MenuTree,
  },
  data() {
    return {
      data: Examplemenudata,
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "map":
          this.clearLayers();
          break;
        case "heat-point":
          break;
        case "TileLayer":
          this.addTileLayer();
          break;
      }
    },
    //新建map
    initMap() {
      this.map = Map("map");
      this.BaseLayer = new BaseLayer(this.map);
    },
    clearLayers() {
      this.clearTileLayer();
    },
    addTileLayer() {
      this.BaseLayer.TileLayer();
    },
    clearTileLayer() {
      this.BaseLayer.clearTileLayer();
      // this.BaseLayer.clearLayerById('test')
    },
  },
};
</script>
<style lang="scss" scoped>
.example-content {
  height: 100%;
  .example-content-menu {
    float: left;
    width: 201px;
    height: 100%;
    background-color: rgb(84, 92, 100);
  }
  .example-content-instruction {
    float: left;
    width: calc(100% - 203px);
    // background-color: rgb(29, 137, 245);
    height: 100%;
  }
}
</style>
