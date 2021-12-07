// export default class MapManager {
//   /**
//    * 构造函数
//    * @param {object} options 配置信息
//    * mapConfig 地图基础设置
//    * mapContiner 地图容器
//    */
//   constructor(options) {
//     this.map = null;
//     this.mapConfig = options.mapConfig;
//     this.mapContiner = options.mapContiner;
//     this.initMap();
//   }
//   get map() {
//     return this.map;
//   }
//   initMap() {
//     this.map = L.map(this.mapContiner, {
//       // crs: L.CRS.EPSG4326,
//       center: new L.LatLng(
//         this.mapContiner.centerlat || 35,
//         this.mapContiner.centerlon || 109
//       ),
//       zoom: this.mapContiner.initZoom || 4,
//       minZoom: this.mapContiner.minZoom || 1,
//       maxZoom: this.mapContiner.maxZoom || 18,
//       zoomControl: false,
//       attributionControl: false,
//       worldCopyJump: true, // 参考api
//       // 设置地图最大范围
//       maxBounds: this.mapContiner.maxBounds,
//       // maxBoundsViscosity: 1.0 // 不允许地图拖拽到地图最大范围外
//     });
//   }
//   loadGaoDeLayer() {
//     if (!this._baseLayerGroup) {
//       this._baseLayerGroup = L.featureGroup().addTo(this._map);
//     }
//     this._baseLayerGroup.clearLayers();

//     const baseLayer = L.tileLayer(
//       "http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}",
//       {
//         attribution: "&copy; 高德地图",
//         // maxZoom: 21,
//         minZoom: 2,
//         subdomains: "1234",
//       }
//     );
//     this._baseLayerGroup.addLayer(baseLayer);
//   }
// }
