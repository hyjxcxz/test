import { MapConfig } from "@/config/map-config";
export function Map(mapId) {
  const options = {
    mapConfig: MapConfig,
    mapContiner: mapId,
    editable: true,
  };
  const map = new L.GW.Map(options);
  return map.map;
}
