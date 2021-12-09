/**
 * 地图基础设置
 */
export const MapConfig = {
  centerlon: 103.3886,
  centerlat: 35.5636,
  initZoom: 4,
  minZoom: 4,
  maxZoom: 18,
  maxBounds: [
    [90, 180],
    [-90, -180],
  ],
};

export function getBaseLayers() {
  const baseLayers = BaseLayers;
  return baseLayers;
}
/**
 * 底图数据源
 */
const BaseLayers = [
  {
    url: "http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    subdomains: "1234",
    attribution: "高德影像",
    layerId: "test",
  },
  {
    label: "谷歌影像",
    image: "./images/layer-google-img.png",
    layers: [
      {
        layerConfig: {
          type: "Inner",
          category: "Annotion",
          url: "TianDiTuWMTS4326.Satellite.Annotion",
          options: {
            token: "2d02a4bf00cfa355abc3f7f7850dfcc7",
          },
        },
      },
      {
        layerConfig: {
          type: "Inner",
          url: "GooglePrivate.Satellite.Map",
          options: {
            token: "2d02a4bf00cfa355abc3f7f7850dfcc7",
          },
        },
      },
    ],
  },
  {
    label: "天地图矢量",
    image: "./images/layer-tdt-vec.png",
    layers: [
      {
        layerConfig: {
          type: "Inner",
          category: "Annotion",
          url: "TianDiTuWMTS4326.Normal.Annotion",
          options: {
            token: "2d02a4bf00cfa355abc3f7f7850dfcc7",
          },
        },
      },
      {
        layerConfig: {
          type: "Inner",
          url: "TianDiTuWMTS4326.Normal.Map",
          options: {
            token: "2d02a4bf00cfa355abc3f7f7850dfcc7",
          },
        },
      },
    ],
  },
  {
    label: "天地图地形",
    image: "./images/layer-tdt-ter.png",
    layers: [
      {
        layerConfig: {
          type: "Inner",
          category: "Annotion",
          url: "TianDiTuWMTS4326.Terrain.Annotion",
          options: {
            token: "2d02a4bf00cfa355abc3f7f7850dfcc7",
          },
        },
      },
      {
        layerConfig: {
          type: "Inner",
          url: "TianDiTuWMTS4326.Terrain.Map",
          options: {
            token: "2d02a4bf00cfa355abc3f7f7850dfcc7",
          },
        },
      },
    ],
  },
];
