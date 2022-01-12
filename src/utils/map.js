import { MapConfig, getBaseLayers } from "@/config/map-config";
export function Map(mapId) {
  const options = {
    mapConfig: MapConfig,
    mapContiner: mapId,
  };
  const map = new L.GW.Map(options);
  const layers = getBaseLayers()[2].layers;
  layers.forEach((element) => {
    const layer = L.GW.Layer.MapServerLayer.MapServerLayer(element);
    map.map.addLayer(layer);
  });
  return map.map;
}
