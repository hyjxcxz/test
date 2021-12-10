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
import PointLayers from "@/components/example/layers/baseLayers/PointLayers";
export default {
  name: "ExampleIndex",
  components: {
    MenuTree,
  },
  data() {
    return {
      data: Examplemenudata,
      map: null,
      pointArry: [
        [40, 116],
        [38, 115],
        [30, 105],
        [33, 98],
        [23, 98],
        [28, 100],
        [29, 100],
        [20, 80],
        [40, 78],
        [39, 77],
        [39, 114],
        [30, 117],
        [29, 120],
      ],
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      // this.clearLayers();
      switch (key) {
        case "map":
          this.addTileLayer();
          break;
        case "marker-point":
          this.addMarkerPointLayer();
          break;
        case "circle-marker-point":
          this.addCircleMarkerLayer();
          break;
        case "rectangle-point":
          // this.clearLayers();
          break;
        case "heat-point":
          break;
        case "twinkle-point":
          this.addblinkMarkerLayer();
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
      this.PointLayers = new PointLayers(this.map);
    },
    clearLayers() {
      this.clearAllMarkerPoint();
      // this.clearTileLayer();
    },
    addTileLayer() {
      this.clearTileLayer();
      this.BaseLayer.TileLayer();
    },
    clearTileLayer() {
      this.BaseLayer.clearTileLayer(); // 根据Layer本身去清除图层
      // this.BaseLayer.clearLayerById('test');// 根据Layer的ID去清除图层
    },
    addMarkerPointLayer() {
      this.clearAllMarkerPoint();
      const self = this;
      let options = {
        type: "MarkerPointLayer", //图层类型
        style: "Icon", //样式类型
        zIndexOffset: 10,
      };
      this.pointArry.forEach((el) => {
        options.x = el[1]; //经度
        options.y = el[0]; //纬度
        self.PointLayers.markerPointLayer(options);
      });
    },
    clearAllMarkerPoint() {
      this.PointLayers.clearAllLayer();
    },
    addCircleMarkerLayer() {
      this.clearAllMarkerPoint();
      const self = this;
      let options = {
        type: "CircleMarkerLayer", //图层类型
        style: "CircleMarker", //样式类型
      };
      this.pointArry.forEach((el) => {
        options.x = el[1]; //经度
        options.y = el[0]; //纬度
        self.PointLayers.markerPointLayer(options);
      });
    },
    //该功能的样式在public/css/index.css中 blinkMarker样式
    addblinkMarkerLayer() {
      this.clearAllMarkerPoint();
      const self = this;
      let options = {
        type: "MarkerPointLayer", //图层类型
        style: "blinkMarker", //样式类型
      };
      this.pointArry.forEach((el) => {
        options.x = el[1]; //经度
        options.y = el[0]; //纬度
        self.PointLayers.markerPointLayer(options);
      });
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
