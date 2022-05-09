import "leaflet-editable";
import "leaflet-measure-path";
export default class Measures {
  constructor(map) {
    this._map = map;
    this.polylineMeasureControl = null;
    this._MeasureLineOrArea = null;
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
  activeMeasureLineOrArea(opt) {
    this._MeasureLineOrArea = new L.GW.control.MeasureLineOrAreaControl(
      this._map,
      opt,
      (leayer, geoJson, activeButton) => {
        console.log(leayer, geoJson, activeButton);
      }
    );
    this._MeasureLineOrArea.active();
  }
  disActiveMeasureLineOrArea() {
    if (this._MeasureLineOrArea) {
      this._MeasureLineOrArea.disactive();
    }
  }
  removeMeasureLineOrAreaLayer() {
    if (this._MeasureLineOrArea) {
      this._MeasureLineOrArea.removeMeasureLayer();
    }
  }
  // measureDistance() {
  //   this._map.options.editable = true;
  //   const mapControlManager = new L.GW.MapControlManager({
  //     activeChange: (control) => {
  //       debugger;

  //       console.log(control);
  //     },
  //   });
  //   if (!this.polylineMeasureControl) {
  //     this.polylineMeasureControl = new L.GW.DrawControl(this._map, 1, (e) => {
  //       debugger;
  //       debugger;
  //       // const EditControl =new L.GW.EditControl(this._map, (w) => {
  //       //   debugger
  //       //   console.log(w);
  //       // })
  //       // mapControlManager.add(EditControl);
  //       // const latlng = e.layer.getLatLngs()[0];
  //       // const latlngs = latlng.push(latlng[0]);
  //       // const DrawPolygon = new L.polygon(latlngs, {
  //       //   showMeasurements: true,
  //       //   // measurementOptions: { showOnHover: true }
  //       // }).addTo(this._map);
  //       // DrawPolygon.enableEdit();
  //       // this._map.on(
  //       //   "editable:vertex:drag editable:vertex:deleted",
  //       //   DrawPolygon.updateMeasurements,
  //       //   DrawPolygon
  //       // );
  //       console.log(e);
  //     });
  //     map.addControl(drawControl);
  //     mapControlManager.add(this.polylineMeasureControl);
  //   }
  //   mapControlManager.active(this.polylineMeasureControl);
  // }
}
