import GeoJSONLayer from "./GeoJSONLayer";
import { getLayerStyle } from "@/config/map-style";
export default class BufferLayer {
  constructor(map) {
    this._map = map;
    this.BufferLayer = null;
    this._GeoJSONLayer = new GeoJSONLayer(this._map);
  }
  bufferLayer(opt, layerGroup) {
    const type = opt.type;
    switch (type) {
      case "point":
        this.getCenterPoint(opt, layerGroup);
        break;
      case "line":
        this.getCenterLine(opt, layerGroup);
        break;
      case "polygon":
        this.getCenterPolygon(opt, layerGroup);
        break;
    }
    this.getBuffer(opt, layerGroup);
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
  getCenterLine(opt, layerGroup) {
    const styleoption = getLayerStyle(opt.centerStyle);
    const style = new L.GW.Style.MarkerStyle(styleoption);
    const options = {
      geojson: opt.geojson,
      style: style,
    };
    this._GeoJSONLayer.geoJSONLayer(options, layerGroup);
  }
  getCenterPolygon(opt, layerGroup) {
    const styleoption = getLayerStyle(opt.centerStyle);
    const style = new L.GW.Style.MarkerStyle(styleoption);
    const options = {
      geojson: opt.geojson,
      style: style,
    };
    this._GeoJSONLayer.geoJSONLayer(options, layerGroup);
  }
  getBuffer(opt, layerGroup) {
    const buffer = new L.GW.Geom.Buffer(opt);
    const style = getLayerStyle(opt.bufferStyle);
    const options = {
      geojson: buffer,
      style,
    };
    this._GeoJSONLayer.geoJSONLayer(options, layerGroup);
  }
}
