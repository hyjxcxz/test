export default class TrackLineLayer {
  constructor(map) {
    this._map = map;
    this.BufferLayer = null;
  }
  trackLine(opt) {
    debugger;
    new L.GW.Layer.TrackLayer(opt);
  }
  removeTrack() {
    new L.GW.Layer.TrackLayer().removeTrack();
  }
}
