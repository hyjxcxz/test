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
    <tracks></tracks>
    <div id="map" class="example-content-instruction"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Examplemenudata from "@/assets/json/Example-menu.json";
import heatArry from "@/assets/json/heatArry.json";
import MenuTree from "@/components/example/MenuTree.vue";
import { Map } from "../../utils/map";
import BaseLayer from "@/components/example/map/baseLayers/BaseLayers";
import Layers from "@/components/example/layers/Layer";
import { getBaseLayers } from "@/config/map-config";
import tracks from "./components/track.vue";
// import MeasureControl from "../../config/measure-control";
// import PolylineMeasureControl from "../../config/polyline-measure-control";

export default {
  name: "ExampleIndex",
  components: {
    MenuTree,
    tracks,
  },
  computed: {
    ...mapState({
      showTrackPanel: function (state) {
        return state.showTrackPanel;
      },
    }),
  },
  data() {
    return {
      data: Examplemenudata,
      MeasureControl: null,
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
          this.addRectanglePoint(); //????????????????????????????????????
          break;
        case "Measure-distance":
          this.measureDistance();
          break;
        case "Measure-All":
          this.measureAll();
          break;
        case "heat-point":
          this.addHeatLayer();
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
    //??????map
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
      this.BaseLayer.clearTileLayer(); // ??????Layer?????????????????????
      // this.BaseLayer.clearLayerById('test');// ??????Layer???ID???????????????
    },
    addMarkerPointLayer() {
      this.clearAllMarkerPoint();
      const self = this;
      let options = {
        type: "MarkerPointLayer", //????????????
        style: "Icon", //????????????
        zIndexOffset: 10,
      };
      this.pointArry.forEach((el) => {
        options.x = el[1]; //??????
        options.y = el[0]; //??????
        self.Layers.markerPointLayer(options);
      });
      this.map.setView([35.5636, 103.3886], 4);
    },
    clearAllMarkerPoint() {
      this.Layers.clearAllLayer();
    },
    addCircleMarkerLayer() {
      this.clearAllMarkerPoint();
      const self = this;
      let options = {
        type: "CircleMarkerLayer", //????????????
        style: "CircleMarker", //????????????
      };
      this.pointArry.forEach((el) => {
        options.x = el[1]; //??????
        options.y = el[0]; //??????
        self.Layers.markerPointLayer(options);
      });
      this.map.setView([35.5636, 103.3886], 4);
    },
    //?????????????????????public/css/index.css??? blinkMarker??????
    addblinkMarkerLayer() {
      this.clearAllMarkerPoint();
      const self = this;
      let options = {
        type: "MarkerPointLayer", //????????????
        style: "blinkMarker", //????????????
      };
      this.pointArry.forEach((el) => {
        options.x = el[1]; //??????
        options.y = el[0]; //??????
        self.Layers.markerPointLayer(options);
      });
      this.map.setView([35.5636, 103.3886], 4);
    },
    addRectanglePoint() {
      this.clearAllMarkerPoint();
      const self = this;
      let options = {
        type: "MarkerPointLayer", //????????????
        style: "DivIcon", //????????????
        pointStyle: "RectanglePoint",
        zIndexOffset: 10,
      };
      this.pointArry.forEach((el) => {
        options.x = el[1]; //??????
        options.y = el[0]; //??????
        self.Layers.markerPointLayer(options);
      });
      this.map.setView([35.5636, 103.3886], 4);
    },
    addEllipseLayer() {
      let options = {
        type: "MarkerPointLayer", //????????????
        style: "Icon", //????????????
        zIndexOffset: 10,
      };
      options.x = 114.832339; //??????
      options.y = 35.192793; //??????
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
    // measureDistance() {
    //   this.Layers.measureDistance();
    // },
    measureAll() {
      const option = {
        layout: [true, false, false], //Layout[0]???????????????????????????????????????true:??????????????????false???????????????1??????Layout[1]???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????true:???????????????false??????????????????Layout[2]??????????????????????????????????????????????????????true????????????false?????????
        polylineOptions: {
          color: "#F54124",
          weight: 3,
          opacity: 0.8,
          fill: false,
          clickable: true,
          showMeasurements: true,
          // measurementOptions: { imperial: true },
        },
        polygonOption: {
          color: "#ffe502",
          weight: 3,
          opacity: 0.8,
          fill: true,
          fillColor: "#ffe502",
          fillOpacity: 0.2,
          clickable: true,
          showMeasurements: true,
          // measurementOptions: { imperial: true },
        },
        temPolylineOptions: {
          color: "#F54124",
          dashArray: 10,
          weight: 2,
          opacity: 0.8,
          fill: false,
          clickable: true,
          showMeasurements: true,
          // measurementOptions: { imperial: true },
        },
      };
      // if (!this.MeasureControl) {
      //   this.MeasureControl = new MeasureControl(
      //     this.map,
      //     { layout: [true, false, false] },
      //     (layer, geojson) => {
      //       debugger;
      //       console.log(geojson);
      //     }
      //   );
      // }
      // this.MeasureControl.active();
      this.Layers.measureLineOrArea(option);
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
          style: "Icon", //????????????
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
          style: "Polyline", //????????????
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
          style: "Polygon", //????????????
        },
        bufferStyle: { style: "Polygon" },
      };
      this.Layers.addBuffer(options);
    },
    addtrackLine() {
      // this.$store.commit("showTrackPanel", true);
      const opt = {
        id: "1",
        name: "test",
        speed: 100,
        runicon: `/imgs/layerimg/icon_point.png`,
        startColor: "#45f82a",
        endColor: "#ff7b00",
        middelColor: "#e4e7ed",
        mutiySymbole: {
          type: "shipManageMutiy",
          riseOnHover: true,
          draggable: false,
          zIndexOffset: 100,
          html: "",
          iconSize: [14, 14],
          iconAnchor: [7, 7],
          className: "mutiy",
        },
        singleSymbole: {
          type: "currentshipManage",
          riseOnHover: true,
          draggable: false,
          zIndexOffset: 100,
          html: "",
          iconSize: [14, 14],
          iconAnchor: [7, 7],
          className: "single",
        },
        routeSymbol: {
          weight: 2,
          color: "#5494f7",
          dashArray: "15",
        },
        realRouteSymbol: {
          weight: 8,
          color: "#5494f7",
        },
        arrowHead: {
          repeat: 100,
          pixelSize: 15,
          headAngle: 75,
          polygon: false,
          pathOptions: {
            stroke: true,
            weight: 6,
            color: "#5494f7",
          },
        },
        map: this.map,
        trackData: [
          { lat: 39.898457, lng: 116.391844 },
          { lat: 39.898595, lng: 116.377947 },
          { lat: 39.898341, lng: 116.368001 },
          { lat: 39.898063, lng: 116.357144 },
          { lat: 39.899095, lng: 116.351934 },
          { lat: 39.905871, lng: 116.35067 },
          { lat: 39.922329, lng: 116.3498 },
          { lat: 39.931017, lng: 116.349671 },
          { lat: 39.939104, lng: 116.349225 },
          { lat: 39.942233, lng: 116.34991 },
          { lat: 39.947263, lng: 116.366892 },
          { lat: 39.947568, lng: 116.387537 },
          { lat: 39.947764, lng: 116.401988 },
          { lat: 39.947929, lng: 116.410824 },
          { lat: 39.947558, lng: 116.42674 },
          { lat: 39.9397, lng: 116.427338 },
          { lat: 39.932404, lng: 116.427919 },
          { lat: 39.923109, lng: 116.428377 },
          { lat: 39.907094, lng: 116.429583 },
          { lat: 39.906858, lng: 116.41404 },
          { lat: 39.906622, lng: 116.405321 },
          { lat: 39.906324, lng: 116.394954 },
          { lat: 39.906308, lng: 116.391264 },
          { lat: 39.916611, lng: 116.390748 },
        ],
      };
      this.Layers.addtrackLine(opt);
    },
    addHeatLayer() {
      const opt = {
        HeatArry: heatArry,
        radius: 25,
        // gradient: this.options.gradient,
        // max: this.options.max,
        // maxZoom: this.options.maxZoom,
        // minOpacity: this.options.minOpacity,
        // blur: this.options.blur,
      };
      this.map.setView([37.87, 116.475], 16);
      this.Layers.addHeatLayer(opt);
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
