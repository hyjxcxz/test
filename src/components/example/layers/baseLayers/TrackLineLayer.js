export default class TrackLineLayer {
  constructor(map) {
    this._map = map;
    this._TrackLayer = null;
  }
  trackLine(opt) {
    this._TrackLayer = new L.GW.Layer.TrackLayer(opt);
    console.log(this._TrackLayer);
  }
  removeTrack() {
    if (this._TrackLayer) {
      this._TrackLayer.removeTrack();
    }
  }
}
