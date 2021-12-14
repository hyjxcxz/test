export default class Measures {
  constructor(map) {
    this._map = map;
    this.polylineMeasureControl = null;
  }
  measureDistance() {
    const mapControlManager = new L.GW.MapControlManager({
      activeChange: (control) => {
        console.log(control);
      },
    });
    if (!this.polylineMeasureControl) {
      this.polylineMeasureControl = new L.GW.PolylineMeasureControl(this._map);
      mapControlManager.add(this.polylineMeasureControl);
    }
    mapControlManager.active(this.polylineMeasureControl);
  }
}
