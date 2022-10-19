import * as d3 from 'd3';
import { Observable } from 'rxjs';

export abstract class MapProvider {
    abstract maps(): string[];
    abstract loadMap(name: string): void;
    abstract mapUpdated(): Observable<GeoMap>;
}

export abstract class GeoMap {
    abstract projection(): d3.GeoProjection;
    abstract apply(selection: d3.Selection<SVGGElement, any, any, any>): void;
    abstract domain(): [[number, number], [number, number]];
    
    coords([lat, lon]: [number, number]): [number, number] {
        return this.projection()([lon, lat]) as [number, number];
    }
}