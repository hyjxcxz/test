import { getLayerStyle } from "@/config/map-style";
export default class PolygonLayers {
  constructor(map) {
    this._map = map;
    this._ellipseLayer = null;
    this._circleMarkerLayer = null;
  }
  ellipseLayer(opt, layerGroup) {
    const style = getLayerStyle(opt);
    opt.icon = style;
    this._ellipseLayer = new L.GW.Layer.EllipseLayer(opt);
    this._ellipseLayer.addTo(layerGroup);
  }
}
