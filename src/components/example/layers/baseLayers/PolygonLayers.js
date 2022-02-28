import { getLayerStyle } from "@/config/map-style";
export default class PolygonLayers {
  constructor(map) {
    this._map = map;
    this._ellipseLayer = null;
    this._circleLayer = null;
  }
  ellipseLayer(opt, layerGroup) {
    const style = getLayerStyle(opt);
    opt.icon = style;
    this._ellipseLayer = new L.GW.Layer.EllipseLayer(opt);
    this._ellipseLayer.addTo(layerGroup);
    this.zoomto(this._ellipseLayer);
  }
  circleLayer(opt, layerGroup) {
    const style = getLayerStyle(opt);
    const newopt = Object.assign(style, opt);
    this._circleLayer = new L.GW.Layer.CircleLayer(newopt);
    this._circleLayer.addTo(layerGroup);
    this.zoomto(this._circleLayer);
  }
  zoomto(layer) {
    const options = {
      type: "Layer",
      option: { layer: layer },
    };
    L.GW.Util.zoomUtil(options, this._map);
  }
}
