import { MapConfig } from "@/config/map-config";
export function Map(mapId) {
  const options = {
    mapConfig: MapConfig,
    mapContiner: mapId,
  };
  const map = new L.GW.Map(options);
  return map.map;
}
