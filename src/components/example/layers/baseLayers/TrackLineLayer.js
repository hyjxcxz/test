export default class TrackLineLayer {
  constructor(map) {
    this._map = map;
  }
  trackLine(opt) {
    this._TrackLayer = new L.GW.Layer.TrackLayer(opt);
  }
  removeTrack() {
    this._TrackLayer.removeTrack();
  }
}
