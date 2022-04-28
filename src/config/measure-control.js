/*
 * @Author: huyinjie
 * @Date: 2022-04-21
 * @LastEditors: huyinjie
 * @LastEditTime: 2022-04-07
 */
import "leaflet-editable/src/Leaflet.Editable";
import "leaflet-measure-path/leaflet-measure-path";
import "leaflet-measure-path/leaflet-measure-path.css";

//  测绘工具(测距侧面集合)
let Drawing = false; //是否正在绘制

let BarDrawLayers = [];
// let MeasureTooltip; //量距提示

// let MeasureResult = 0; //测量结果

let DrawPolyline;

let DrawMovePolyline; //绘制过程中的折线
let DrawPolylinePoints = []; //绘制的折线的节点集

let DrawPolygon; //绘制的面
let DrawPolygonPoints = []; //绘制的面的节点集
let polylineOptions = {
  color: "#F54124",
  weight: 3,
  opacity: 0.8,
  fill: false,
  clickable: true,
  showMeasurements: true,
  // measurementOptions: { imperial: true },
};
let polygonOption = {
  color: "#ffe502",
  weight: 3,
  opacity: 0.8,
  fill: true,
  fillColor: "#ffe502",
  fillOpacity: 0.2,
  clickable: true,
  showMeasurements: true,
  // measurementOptions: { imperial: true },
};
let temPolylineOptions = {
  color: "#F54124",
  dashArray: 10,
  weight: 2,
  opacity: 0.8,
  fill: false,
  clickable: true,
  showMeasurements: true,
  // measurementOptions: { imperial: true },
};
export default class MeasureControl extends L.GW.BaseControl {
  constructor(map, options = {}, callback) {
    super(map, options);
    this._map = map;
    this._options = options;
    this._activeButton = false;
    this._callback = callback;
    this._pointList = [];
    polylineOptions = options.polylineOptions;
    temPolylineOptions = options.temPolylineOptions;
    polygonOption = options.polygonOption;
    this.geom = null;
    this.polygonOver = false;
    this._featureGroup = L.featureGroup().addTo(map);
    const that = this;
    this._getClickCallback = (e) => {
      that.onClick(e, that._map);
      if (that.polygonOver && that._callback) {
        const polygonGeoJson = this.geom.toGeoJSON();
        that._callback(this.geom, polygonGeoJson);
      }
    };
    this._onMove = (e) => {
      that.onMove(e, that._map);
    };
    this._edita = (e) => {
      const polygonGeoJson = e.layer.toGeoJSON();
      that._callback(e.layer, polygonGeoJson);
    };
  }
  removeMeasureLayer() {
    this.removeAllLayer(this._map);
  }
  //激活
  active() {
    DrawPolygonPoints = [];
    this.startDrawLine(this._map);
  }
  //失活
  disactive() {
    if (!this._actived) return;
    this._actived = false;
    this.clearLayersOrNoe();
  }
  startDrawLine(map) {
    map.getContainer().style.cursor = "crosshair";
    DrawPolyline = new L.Polyline([], polylineOptions)
      .showMeasurements()
      .addTo(map); //绘制的折线
    map.on("click", this._getClickCallback);
    // map.on("mousedown", this._getClickCallback);
    map.on("dblclick", onDoubleClick);
    const that = this;
    function onDoubleClick() {
      map.getContainer().style.cursor = "";
      if (Drawing) {
        if (DrawMovePolyline != undefined && DrawMovePolyline != null) {
          map.removeLayer(DrawMovePolyline);
          DrawMovePolyline = null;
        }
        map.removeLayer(DrawPolyline);
        DrawPolyline = new L.Polyline(DrawPolygonPoints, polylineOptions).addTo(
          map
        ); //绘制的折线
        DrawPolyline.enableEdit();
        map.on(
          "editable:vertex:drag editable:vertex:deleted",
          DrawPolyline.updateMeasurements,
          DrawPolyline
        );
        map.on("editable:vertex:dragend", that._edita);
        map.on("editable:vertex:deleted", that._edita);
        // this.geom = DrawPolyline;
        BarDrawLayers.push(DrawPolyline);
        Drawing = false;
        that.clearData(); //清除数据
        that.mapOff(); //关闭地图事件
        if (that._callback) {
          const polylineGeoJson = DrawPolyline.toGeoJSON();
          that._callback(DrawPolyline, polylineGeoJson);
        }
        if (that._options.layout[1]) {
          //按钮还为激活状态
          that._activeButton = true;
        } else {
          //按钮自动失活
          that._activeButton = false;
        }
        // if (options.layout[0]) {
        //   //添加多个
        // } else {
        //   //添加一个
        //   map.off("mousedown");
        //   map.off("mousemove");
        //   map.off("dblclick");
        //   if (options.layout[1]) {
        //     //按钮还为激活状态
        //     this._activeButton = true;
        //   } else {
        //     //按钮自动失活
        //     this._activeButton = false;
        //   }
        // }
      }
    }
  }
  onClick(e, map) {
    Drawing = true; //是否正在绘制

    DrawPolylinePoints.push(e.latlng); //绘制的折线的节点集
    DrawPolygonPoints.push([e.latlng.lat, e.latlng.lng]);
    DrawPolyline.setLatLngs(DrawPolylinePoints);
    DrawPolyline.showMeasurements();
    DrawPolyline.enableEdit();
    map.on(
      "editable:vertex:drag",
      DrawPolyline.updateMeasurements,
      DrawPolyline
    );
    const that = this;
    map.on("editable:vertex:mousedown", function (e) {
      that.drawPolygonLayer(e, map);
      // console.log(DrawPolylinePoints[0], e);
    });
    map.on("mousemove", this._onMove);
  }
  drawPolygonLayer(e, map) {
    if (DrawPolylinePoints.length > 2) {
      if (
        DrawPolylinePoints[0].lat === e.latlng.lat &&
        DrawPolylinePoints[0].lng === e.latlng.lng
      ) {
        DrawPolygonPoints.push(DrawPolylinePoints[0]);
        DrawPolygon = L.polygon(DrawPolygonPoints, polygonOption).addTo(map);
        DrawPolygon.enableEdit();
        map.on(
          "editable:vertex:drag editable:vertex:deleted",
          DrawPolygon.updateMeasurements,
          DrawPolygon
        );
        map.on("editable:vertex:dragend", this._edita);
        map.on("editable:vertex:deleted", this._edita);
        this.polygonOver = true;
        this.geom = DrawPolyline;
        DrawPolylinePoints = [];
        DrawPolygonPoints = [];
        map.removeLayer(DrawPolyline);
        map.removeLayer(DrawMovePolyline);
        map.off("mousemove");
        map.off("dblclick");
        map.off("click");
        map.off("editable:vertex:mousedown");
        map.getContainer().style.cursor = "auto";
        this._callback(DrawPolygon);
        return;
      }
    }
  }
  onMove(e, map) {
    if (Drawing) {
      //是否正在绘制
      if (DrawMovePolyline != undefined && DrawMovePolyline != null) {
        //绘制过程中的折线
        map.removeLayer(DrawMovePolyline);
      }
      let prevPoint = DrawPolylinePoints[DrawPolylinePoints.length - 1];
      DrawMovePolyline = new L.Polyline(
        [prevPoint, e.latlng],
        temPolylineOptions
      ).showMeasurements();
      map.addLayer(DrawMovePolyline);
    }
  }

  removeAllLayer(map) {
    map.off("mousedown");
    map.off("mousemove");
    map.off("dblclick");
    map.off("click");
    DrawPolygonPoints = [];
    BarDrawLayers = [];
    if (DrawPolyline) {
      map.removeLayer(DrawPolyline);
    }
    if (DrawMovePolyline) {
      map.removeLayer(DrawMovePolyline);
    }
    if (DrawPolygon) {
      map.removeLayer(DrawPolygon);
    }
  }
  clearLayersOrNoe() {
    if (this._options.layout[2]) {
      //是否清除图层
      this.removeAllLayer(this._map);
    }
  }
  /**
   * 关闭地图事件
   */
  mapOff() {
    this._map.off("click");
    this._map.off("mousemove");
    this._map.off("dblclick");
  }
  clearData() {
    DrawPolylinePoints = [];
    DrawPolygonPoints = [];
  }
  canEdita(layer) {
    this._map.on(
      "editable:vertex:drag editable:vertex:deleted",
      layer.updateMeasurements,
      layer
    );
    this._map.on("editable:vertex:dragend", this._edita);
    this._map.on("editable:vertex:deleted", this._edita);
  }
}
