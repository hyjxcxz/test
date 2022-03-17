export default class TrackLineLayer {
  constructor(map) {
    this._map = map;
  }
  trackLine(opt) {
    debugger;
    this._TrackLayer=new L.GW.Layer.TrackLayer(opt);
  }
  removeTrack() {
    this._TrackLayer.removeTrack();
  }
}
