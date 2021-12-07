// export function getLayerStyle(type) {
//   switch (type) {
//     case "2": // 场区范围图层样式
//       return {
//         stroke: true,
//         color: "#409eff",
//         opacity: 1,
//         weight: 2,
//         fill: false,
//       };
//     case "801": // 绘制的线段样式
//       return {
//         color: "rgba(25,185,172,1)",
//         weight: 2,
//         fillColor: "rgba(25,185,172,1)",
//         fillOpacity: 0.1,
//       };
//     case "802": // 绘制的线段样式端点样式
//       return {
//         color: "rgba(25,185,172,1)",
//         weight: 4,
//         fillColor: "rgba(255,255,255,1)",
//         fillOpacity: 1,
//         radius: 7,
//       };
//     case "901": // 外扩时内框样式
//       return {
//         stroke: true,
//         color: "rgba(243,84,84,1)",
//         opacity: 1,
//         weight: 2,
//         fill: false,
//       };
//     case "902": // 外扩时外框样式
//       return {
//         stroke: true,
//         color: "#F35454",
//         opacity: 0.3,
//         weight: 2,
//         fillColor: "#F35454",
//         fillOpacity: 0.3,
//       };
//     case "903": // 风机椭圆
//       return {
//         stroke: true,
//         color: "#F35454",
//         opacity: 0.5,
//         weight: 2,
//         fillColor: "#F35454",
//         fillOpacity: 0.3,
//       };
//     default:
//       return {};
//   }
// }
// export function getMarkerLayerIcon(type, element) {
//   switch (String(type)) {
//     case "derection":
//       return getMarkerchartIcon("./images/i_sensitive _point.png", element);
//     case "halfcut":
//       return getHalcutMarkerIcon("", element);
//   }
//   return null;
// }
// export function getPointLayerIcon(
//   type,
//   tag,
//   programColor,
//   turbineColor,
//   terrainComplexity
// ) {
//   switch (String(type)) {
//     case "3":
//       return getMarkerIcon("./images/i_tower_point.png", tag);
//     case "5":
//       return getColorMarkerIcon(
//         "./images/i_turbine_point.png",
//         tag,
//         programColor,
//         turbineColor,
//         terrainComplexity
//       );
//     case "6":
//       return getMarkerIcon(
//         "./images/i_sensitive _point.png",
//         tag,
//         terrainComplexity
//       );
//     case "50":
//       return L.divIcon({
//         html: `<img src='/images/i_risk_point.png' ></img>`,
//         iconSize: [30, 12],
//         iconAnchor: [15, 6],
//         className: "goldgis-marker-icon",
//       });
//   }
//   return null;
// }

// export function getPointLayerIconForDraw(type) {
//   switch (String(type)) {
//     case "3":
//       return getMarkerIconForDraw("./images/i_tower_point.png");
//     case "5":
//       return getMarkerIconForDraw("./images/i_turbine_point.png");
//     case "6":
//       return getMarkerIconForDraw("./images/i_sensitive _point.png");
//   }
//   return null;
// }

// function getMarkerIcon(imgUrl, tag, terrainComplexity) {
//   return L.divIcon({
//     html: `<div><img src='${imgUrl}' ></img><label>${tag}</label><label>${
//       terrainComplexity || ""
//     }</label></div>`,
//     iconSize: [27, 33],
//     iconAnchor: [13.5, 33],
//     popupAnchor: [0, -33],
//     className: "goldgis-marker-icon",
//   });
// }
// function getHalcutMarkerIcon(imgUrl, point) {
//   const newclass = "popupNameinput_" + point.tag.id;
//   let html = `<div class="popupName"><span>高程:</span><input id='${newclass}' type="text" value='${point.tag.altitude}' /><span>m</span><div class="popupNameSave" id='${point.tag.id}' data-letitude='${point.tag.altitude}' data-lat='${point.latlon[0]}' data-lon='${point.latlon[1]}' data-name='${point.tag.name}'>保存</div></div>`;
//   if (point.tag.fix) {
//     html = `<div class="popupName"><span>高程:</span><input readonly="readonly" id='${newclass}' type="text" value='${point.tag.altitude}' /><span>m</span></div>`;
//   }
//   return L.divIcon({
//     html: html,
//     iconSize: [130, 80],
//     iconAnchor: [0, 36],
//     popupAnchor: [0, 0],
//     className: "goldgis-marker-icon",
//   });
// }

// // 根据机型和编辑的颜色动态渲染风机点位的颜色
// function getColorMarkerIcon(imgUrl, tag, color, color1, terrainComplexity) {
//   const terrainComplexityNumber = Number(terrainComplexity);
//   const terrainComplexityname = terrainComplexityNumber > 2 ? "复杂" : "一般";
//   return L.divIcon({
//     html: `<div class="turImg">
//                 <div class="colorBg" style="background-color: ${color};">
//                     <img src="/images/tur.png" class="tur">
//                 </div>
//                 <div class="Dots" style="background-color: ${color1};"></div>
//             </div>
//             <label class="label">
//                编号: ${tag}
//            </label>
//             <label class="label">
//               地形复杂度: ${terrainComplexityname || ""}
//            </label>
//           `,
//     iconSize: [27, 33],
//     iconAnchor: [13.5, 33],
//     popupAnchor: [0, -33],
//     className: "goldgis-color-marker-icon",
//   });
// }
// function getMarkerchartIcon(imgUrl, ele) {
//   let html = "";
//   const prehtml =
//     '<div class="turImg"><div class="colorBg"><img src="' +
//     imgUrl +
//     '" class="tur"></div>' +
//     '<div class="Dots" ></div></div><label class="label">' +
//     ele.tag +
//     "</label>";
//   const data = ele.scanResults;
//   let divchart = '<div class="map-chart"><ul class="pie">';
//   let flag = 0;
//   if (data.length > 0) {
//     data.forEach((i) => {
//       const sector = Number(i.sector);
//       let classname = "";
//       if (sector === 0 || sector === 0.0) {
//         classname = "slice-1";
//       } else if (sector === 22.5) {
//         classname = "slice-2";
//       } else if (sector === 45.0) {
//         classname = "slice-3";
//       } else if (sector === 67.5) {
//         classname = "slice-4";
//       } else if (sector === 90.0) {
//         classname = "slice-5";
//       } else if (sector === 112.5) {
//         classname = "slice-6";
//       } else if (sector === 135.0) {
//         classname = "slice-7";
//       } else if (sector === 157.5) {
//         classname = "slice-8";
//       } else if (sector === 180.0) {
//         classname = "slice-9";
//       } else if (sector === 202.5) {
//         classname = "slice-10";
//       } else if (sector === 225.0) {
//         classname = "slice-11";
//       } else if (sector === 247.5) {
//         classname = "slice-12";
//       } else if (sector === 270.0) {
//         classname = "slice-13";
//       } else if (sector === 292.5) {
//         classname = "slice-14";
//       } else if (sector === 315.0) {
//         classname = "slice-15";
//       } else if (sector === 337.5) {
//         classname = "slice-16";
//       }

//       if (i.riskLevel === "mid") {
//         flag++;
//         divchart +=
//           '<li class="slice map-chart-mind ' +
//           classname +
//           '" ><span>' +
//           sector +
//           "</span></li>";
//       } else if (i.riskLevel === "low") {
//         // divchart+='<li class="slice map-chart-low '+classname+'"></li>'
//       } else if (i.riskLevel === "hig") {
//         flag++;
//         divchart +=
//           '<li class="slice map-chart-hig ' +
//           classname +
//           '"><span>' +
//           sector +
//           "</span></li>";
//       } else {
//         divchart +=
//           '<li class="slice map-chart-min ' +
//           classname +
//           '"><span>' +
//           sector +
//           "</span></li>";
//       }
//     });
//   }
//   if (flag > 0) {
//     html = prehtml + divchart + "<ul></div> ";
//   } else {
//     html = prehtml + "<ul></div> ";
//   }
//   return L.divIcon({
//     html: html,
//     iconSize: [27, 33],
//     iconAnchor: [13.5, 33],
//     popupAnchor: [0, -33],
//     className: "goldgis-color-marker-icon",
//   });
// }

// function getMarkerIconForDraw(imgUrl) {
//   return L.icon({
//     iconUrl: imgUrl,
//     iconSize: [27, 33],
//     iconAnchor: [13.5, 33],
//   });
// }

// export const getDrawToolOptions = function (type) {
//   switch (type) {
//     case 1: // Polyline
//       return {
//         // 画线时的临时端点样式
//         icon: new L.DivIcon({
//           iconSize: new L.Point(10, 10),
//           iconAnchor: [9.5, 9.5],
//           className: "leaflet-temp-icon",
//         }),
//         // 画线时的临时线样式
//         shapeOptions: {
//           stroke: true,
//           color: "rgba(25,185,172,1)",
//           weight: 4,
//           opacity: 0.5,
//           fill: false,
//           clickable: true,
//         },
//         maxPoints: 2,
//       };
//     case 2: // Polygon
//       return {
//         // 画线时的临时端点样式
//         allowIntersection: true,
//         icon: new L.DivIcon({
//           iconSize: new L.Point(10, 10),
//           iconAnchor: [9.5, 9.5],
//           className: "leaflet-temp-icon",
//         }),
//         // 画线时的临时线样式
//         shapeOptions: {
//           stroke: true,
//           color: "rgba(25,185,172,1)",
//           weight: 4,
//           opacity: 0.5,
//           fillColor: "rgba(25,185,172,1)",
//           fillOpacity: 0.1,
//           clickable: true,
//         },
//       };
//     default:
//       return {};
//   }
// };
