export function getLayerStyle(opt) {
  debugger;
  const type = opt.style;

  const iconSize = getIconSize(type);
  switch (type) {
    case "Icon":
      return {
        type: type,
        iconUrl: `/imgs/layerimg/icon_point.png`, //请求图标图片的URL  // 相对goldwind.leaflet.js路径
        iconSize: iconSize, //图标图片的像素大小
        iconAnchor: [iconSize[0] / 2, iconSize[1]], //图标提示的坐标（在左上角）。
        popupAnchor: [iconSize[0] / 2, iconSize[1]], //与图标锚相关的打开弹出框的点的坐标
        // shadowUrl:this.options.shadowUrl|| '',//图标阴影图的URL。如果没有指定，图标没有阴影。
        // shadowSize: this.options.shadowSize||[44, 44],//图标阴影图的像素大小
        // shadowAnchor:this.options.shadowAnchor|| [22, 44],//图标阴影图提示的坐标（在左上角）
        className: "test-Icon", //
        // tooltipAnchor:this.options.tooltipAnchor||[0,0]
      };
    case "CircleMarker":
      return {
        stroke: true,
        color: "#aaaaaa",
        weight: 1,
        opacity: 1,
        fillColor: "#00e400",
        fillOpacity: 1,
        radius: 10,
      };
    case "blinkMarker": // 绘制的线段样式端点样式
      return {
        type: type,
        color: "#ff0000",
        iconSize: iconSize,
        diveColor: "#ffffff",
        level: "3", //发散的重度
        speedTime: 2, //闪烁的速度
      };
    case "DivIcon":
      return {
        type: type,
        html: getHtml(opt.pointStyle),
        className: "RectanglePoint-DivIcon",
        iconSize: iconSize,
        iconAnchor: [iconSize[0] / 2, iconSize[1] / 2],
      };
    case "Ellipse":
      return {
        stroke: true,
        color: "#F35454",
        opacity: 0.5,
        weight: 2,
        fillColor: "#F35454",
        fillOpacity: 0.3,
      };
    default:
      return {};
  }
}
function getIconSize(type) {
  let iconSize = [27, 33];
  switch (type) {
    case "Icon":
      return (iconSize = [27, 33]);
    case "blinkMarker":
      return (iconSize = [12, 12]);
    case "iconSize":
      return (iconSize = [12, 12]);
    default:
      return iconSize;
  }
}
function getHtml(type) {
  switch (type) {
    case "RectanglePoint":
      return "<div class=" + type + " ></div>";
  }
}
