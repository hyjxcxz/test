import GeoJSONLayer from "./GeoJSONLayer";
import { getLayerStyle } from "@/config/map-style";
export default class TrackLineLayer {
    constructor(map) {
        this._map = map;
        this.BufferLayer = null;
        this._GeoJSONLayer = new GeoJSONLayer(this._map);
    }
    trackLine(opt, layerGroup) {
        debugger
        new L.GW.Layer.TrackLayer(opt)
    }
    removeTrack() { 
        new L.GW.Layer.TrackLayer().removeTrack()
    }
}
