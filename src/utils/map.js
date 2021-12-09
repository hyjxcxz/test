import { MapConfig } from "@/config/map-config";
export function Map(mapId) {
  const options = {
    mapConfig: MapConfig,
    mapContiner: mapId,
  };
  const map = new L.GW.Map(options);
  // const TileLayer1 = new L.GW.Layer.TileLayer(getBaseLayers()[0]);
  // map.map.addLayer(TileLayer1);
  return map.map;
}
