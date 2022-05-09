// import { getLayerStyle } from "@/config/map-style";
import PointLayers from "./baseLayers/PointLayers";
import PolygonLayers from "./baseLayers/PolygonLayers";
import Measures from "./baseLayers/Measure";
import BufferLayer from "./baseLayers/BufferLayer";
import TrackLineLayer from "./baseLayers/TrackLineLayer";
export default class Layers {
  constructor(map) {
    this._map = map;
    this._layerGroup = null;
    const layerGroup = this.LayerGroup();
    this._layerGroup = layerGroup.layerGroup;
    this._layerGroup.addTo(this._map);
    this._PointLayers = new PointLayers(this._map);
    this._PolygonLayers = new PolygonLayers(this._map);
    this._Measures = new Measures(this._map);
    this._BufferLayer = new BufferLayer(this._map);
    this._TrackLineLayer = new TrackLineLayer(this._map);
  }
  markerPointLayer(opt) {
    this._PointLayers.markerPointLayer(opt, this._layerGroup);
  }
  circleMarkerLayer(opt) {
    this._PointLayers.circleMarkerLayer(opt, this._layerGroup);
  }
  ellipseLayer(opt) {
    this._PolygonLayers.ellipseLayer(opt, this._layerGroup);
  }
  circleLayer(opt) {
    this._PolygonLayers.circleLayer(opt, this._layerGroup);
  }
  measureDistance() {
    this._Measures.measureDistance(this._map);
  }
  addBuffer(opt) {
    this._BufferLayer.bufferLayer(opt, this._layerGroup);
  }
  addtrackLine(opt) {
    this._TrackLineLayer.trackLine(opt);
  }
  addHeatLayer(opt) {
    this._PointLayers.heatLayer(opt, this._layerGroup);
  }
  measureLineOrArea(opt) {
    this._Measures.activeMeasureLineOrArea(opt, this._map);
  }
  disActiveMeasureLineOrArea() {
    this._Measures.disActiveMeasureLineOrArea();
  }
  removeMeasureLineOrAreaLayer() {
    this._Measures.removeMeasureLineOrAreaLayer();
  }
  clearPointLayer() {
    this._PointLayers.clearPointLayer(this._layerGroup);
    // this._layerGroup.removeLayer(this._markerPointLayer); //直接根据layer本身清除对应图层
  }
  clearLayerById(layerId) {
    this._layerGroup.removeLayerById(layerId); //根据layerId清除对应图层
  }
  clearAllLayer() {
    this._layerGroup.clearLayers();
    this._TrackLineLayer.removeTrack();
  }
  /**
   * @param {bool} visible true:显示；false：隐藏
   */
  setVisible(visible) {
    this._layerGroup.visible(visible); //根据layerId清除对应图层
  }
  LayerGroup() {
    return new L.GW.Layer.LayerGroup(this._map);
  }
}
