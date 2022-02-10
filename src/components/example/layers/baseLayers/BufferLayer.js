import GeoJSONLayer from "./GeoJSONLayer";
import { getLayerStyle } from "@/config/map-style";
export default class BufferLayer {
  constructor(map) {
    this._map = map;
    this.BufferLayer = null;
    this._GeoJSONLayer = new GeoJSONLayer(this._map);
  }
  bufferLayer(opt, layerGroup) {
    this.getBuffer(opt, layerGroup);
    const type = opt.type;
    switch (type) {
      case "point":
        this.getCenterPoint(opt, layerGroup);
        break;
      case "line":
        break;
      case "polygon":
        break;
    }
  }
  getCenterPoint(opt, layerGroup) {
    const styleoption = getLayerStyle(opt.centerStyle);
    const style = new L.GW.Style.MarkerStyle(styleoption);
    const options = {
      geojson: opt.geojson,
      pointStyle: style,
    };
    this._GeoJSONLayer.geoJSONLayer(options, layerGroup);
  }
  getBuffer(opt, layerGroup) {
    const buffer = new L.GW.Layer.BufferLayer(opt);
    const style = getLayerStyle(opt.bufferStyle);
    const options = {
      geojson: buffer,
      style,
    };
    this._GeoJSONLayer.geoJSONLayer(options, layerGroup);
  }
}
