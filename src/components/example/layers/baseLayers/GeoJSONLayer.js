export default class GeoJSONLayer {
  constructor(map) {
    this._map = map;
  }
  geoJSONLayer(opt, layerGroup) {
    const geoJSONLayer = new L.GW.Layer.GeoJSONLayer(opt);
    geoJSONLayer.addTo(layerGroup);
    const options = {
      type: "Layer",
      option: { layer: geoJSONLayer },
    };
    L.GW.Util.zoomUtil(options, this._map);
  }
}
