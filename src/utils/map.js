// import { MapConfig } from "@/config/map-config";
export function Map(mapId) {
  // const options = {
  //   mapConfig: MapConfig,
  //   mapContiner: mapId,
  //   editable: true
  // };
  // const map = new L.GW.Map(options);
  // return map.map;
  const startPoint = [43.1249, 1.254];
  const map = L.map(mapId, { editable: true }).setView(startPoint, 16);
  L.tileLayer("http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    maxZoom: 20,
    attribution:
      'Data \u00a9 <a href="http://www.openstreetmap.org/copyright"> OpenStreetMap Contributors </a> Tiles \u00a9 HOT',
  }).addTo(map);
  return map;
}
