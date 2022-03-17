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
import Layers from "@/components/example/layers/Layer";
import { getBaseLayers } from "@/config/map-config";

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
    this.addBaseLayer();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.clearLayers();
      switch (key) {
        case "map":
          this.addBaseLayer();
          break;
        case "marker-point":
          this.addMarkerPointLayer();
          break;
        case "circle-marker-point":
          this.addCircleMarkerLayer();
          break;
        case "rectangle-point":
          // this.addPoint();
          this.addRectanglePoint(); //其它形状都可以用样式控制
          break;
        case "Measure-distance":
          this.measureDistance();
          break;
        case "heat-point":
          break;
        case "twinkle-point":
          this.addblinkMarkerLayer();
          break;
        case "Circle":
          this.addCircleLayer();
          break;
        case "Ellipse":
          this.addEllipseLayer();
          break;
        case "PointBuffer":
          this.addPointBuffer();
          break;
        case "LineBuffer":
          this.addLineBuffer();
          break;
        case "PolygonBuffer":
          this.addPolygonBuffer();
          break;
        case "TileLayer":
          this.addTileLayer();
          break;
        case "trackLine":
          this.addtrackLine();
          break;
      }
    },
    //新建map
    initMap() {
      this.map = Map("map");
      this.BaseLayer = new BaseLayer(this.map);
      this.Layers = new Layers(this.map);
    },
    clearLayers() {
      this.clearAllMarkerPoint();
      // this.clearTileLayer();
    },
    addBaseLayer() {
      const layers = getBaseLayers()[2].layers;
      this.BaseLayer.addBaseLayer(layers);
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
        self.Layers.markerPointLayer(options);
      });
    },
    clearAllMarkerPoint() {
      this.Layers.clearAllLayer();
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
        self.Layers.markerPointLayer(options);
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
        self.Layers.markerPointLayer(options);
      });
    },
    addRectanglePoint() {
      this.clearAllMarkerPoint();
      const self = this;
      let options = {
        type: "MarkerPointLayer", //图层类型
        style: "DivIcon", //样式类型
        pointStyle: "RectanglePoint",
        zIndexOffset: 10,
      };
      this.pointArry.forEach((el) => {
        options.x = el[1]; //经度
        options.y = el[0]; //纬度
        self.Layers.markerPointLayer(options);
      });
    },
    addEllipseLayer() {
      let options = {
        type: "MarkerPointLayer", //图层类型
        style: "Icon", //样式类型
        zIndexOffset: 10,
      };
      options.x = 114.832339; //经度
      options.y = 35.192793; //纬度
      this.Layers.markerPointLayer(options);
      const opt = {
        x: 114.832339,
        y: 35.192793,
        semiMajor: 300,
        semiMinor: 200,
        tiltDegrees: 0,
        style: "Ellipse",
      };
      this.Layers.ellipseLayer(opt);
    },
    addCircleLayer() {
      const opt = {
        x: 114.832339,
        y: 35.192793,
        radius: 300,
        style: "Circle",
      };
      this.Layers.circleLayer(opt);
    },
    measureDistance() {
      this.Layers.measureDistance();
    },
    addPoint() {
      const Geomoptions = {
        type: "GeomPoint",
        x: 116,
        y: 40,
      };
      const Geompoint = new L.GW.Geom.Point(Geomoptions);
      console.log(Geompoint);
      const Pixeloptions = {
        type: "PixelPoint",
        x: 200.1,
        y: 300.6,
      };
      const Pixelpoint = new L.GW.Geom.Point(Pixeloptions);
      console.log(Pixelpoint);
    },
    addPointBuffer() {
      const pointGeojson =
        L.GW.Util.geojsonUtil.terraformWKTtoGeoJson("POINT(116 40)");
      const options = {
        type: "point",
        geojson: pointGeojson,
        radius: 500,
        // units:'m',
        steps: 360,
        centerStyle: {
          style: "Icon", //样式类型
        },
        bufferStyle: { style: "Polygon" },
      };
      this.Layers.addBuffer(options);
    },
    addLineBuffer() {
      const pointGeojson = L.GW.Util.geojsonUtil.terraformWKTtoGeoJson(
        "LINESTRING(112 40,113 40,114 39)"
      );
      const options = {
        type: "line",
        geojson: pointGeojson,
        radius: 50,
        // units:'m',
        steps: 360,
        centerStyle: {
          style: "Polyline", //样式类型
        },
        bufferStyle: { style: "Polygon" },
      };
      this.Layers.addBuffer(options);
    },
    addPolygonBuffer() {
      const pointGeojson = L.GW.Util.geojsonUtil.terraformWKTtoGeoJson(
        "POLYGON((116 40,115 40,115 39,116 39,116 40))"
      );
      const options = {
        type: "polygon",
        geojson: pointGeojson,
        radius: 50,
        // units:'m',
        steps: 360,
        centerStyle: {
          style: "Polygon", //样式类型
        },
        bufferStyle: { style: "Polygon" },
      };
      this.Layers.addBuffer(options);
    },
    addtrackLine(){
      vbmnbfdgh
    }
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
    overflow: auto;
    max-height: 100%;
  }
  .example-content-instruction {
    float: left;
    width: calc(100% - 203px);
    // background-color: rgb(29, 137, 245);
    height: 100%;
  }
}
</style>
