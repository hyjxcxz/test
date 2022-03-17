export default class TrackLineLayer {
  constructor(map) {
    this._map = map;
  }
  trackLine(opt) {
    new L.GW.Layer.TrackLayer(opt);
  }
  removeTrack() {
    new L.GW.Layer.TrackLayer().removeTrack();
  }
}
