import { getLayerStyle } from "@/config/map-style";
export default class PointLayers {
  constructor(map) {
    this._map = map;
    this._markerPointLayer = null;
    this._HeatLayer = null;
    this._circleMarkerLayer = null;
  }
  markerPointLayer(opt, layerGroup) {
    const styleoption = getLayerStyle(opt);
    const style = new L.GW.Style.MarkerStyle(styleoption);
    opt.icon = style;
    this._markerPointLayer = new L.GW.Layer.PointLayer(opt);
    this._markerPointLayer.addTo(layerGroup);
  }
  heatLayer(opt, layerGroup) {
    this._HeatLayer = new L.GW.Layer.HeatLayer(opt);
    this._HeatLayer.addTo(layerGroup);
  }
  circleMarkerLayer(opt, layerGroup) {
    const style = getLayerStyle(opt);
    style.type = opt.type;
    this._circleMarkerLayer = new L.GW.Layer.PointLayer(style);
    this._circleMarkerLayer.addTo(layerGroup);
  }
  clearPointLayer() {
    this._layerGroup.removeLayer(this._markerPointLayer); //直接根据layer本身清除对应图层
  }
}
