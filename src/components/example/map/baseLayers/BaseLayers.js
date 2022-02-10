import { getBaseLayers } from "@/config/map-config";
export default class BaseLayer {
  constructor(map) {
    this._map = map;
    this._featureGroup = this.FeatureLayer().featureGroup;
    this._featureGroup.addTo(this._map);
    this._TileLayer = null;
  }
  addBaseLayer(layers) {
    layers.forEach((element) => {
      const layer = L.GW.Layer.MapServerLayer(element);
      this.addLayer(layer);
    });
  }
  addLayer(layer) {
    this._featureGroup.addLayer(layer);
  }
  TileLayer() {
    this._TileLayer = new L.GW.Layer.TileLayer(getBaseLayers()[0]);
    this.addLayer(this._TileLayer);
  }
  clearTileLayer() {
    if (this._featureGroup && this._TileLayer) {
      this._featureGroup.removeLayer(this._TileLayer); //直接根据layer本身清除对应图层
    }
  }
  clearLayerById(layerId) {
    this._featureGroup.removeLayerById(layerId); //根据layerId清除对应图层
  }
  /**
   *
   * @param {bool} visible true:显示；false：隐藏
   */
  setVisible(visible) {
    this._featureGroup.visible(visible); //根据layerId清除对应图层
  }
  FeatureLayer() {
    return new L.GW.Layer.FeatureLayer(this._map);
  }
}
