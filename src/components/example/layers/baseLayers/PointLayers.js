import { getLayerStyle } from "@/config/map-style";
export default class PointLayers {
  constructor(map) {
    this._map = map;
    this._layerGroup = null;
    this._markerPointLayer = null;
    this._circleMarkerLayer = null;
    const layerGroup = this.LayerGroup();
    this._layerGroup = layerGroup.layerGroup;
    this._layerGroup.addTo(this._map);
  }
  markerPointLayer(opt) {
    const styleoption = getLayerStyle(opt.style);
    const style = new L.GW.Style.MarkerStyle(styleoption);
    opt.icon = style;
    this._markerPointLayer = new L.GW.Layer.PointLayer(opt);
    this._markerPointLayer.addTo(this._layerGroup);
  }
  circleMarkerLayer(opt) {
    const style = getLayerStyle(opt.style);
    style.type = opt.type;
    this._circleMarkerLayer = new L.GW.Layer.PointLayer(style);
    this._circleMarkerLayer.addTo(this._layerGroup);
  }
  clearPointLayer() {
    this._layerGroup.removeLayer(this._markerPointLayer); //直接根据layer本身清除对应图层
  }
  clearLayerById(layerId) {
    this._layerGroup.removeLayerById(layerId); //根据layerId清除对应图层
  }
  clearAllLayer() {
    this._layerGroup.clearLayers();
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
