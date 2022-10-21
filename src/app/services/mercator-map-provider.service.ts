import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { GeoMap, MapProvider } from '../shared/interfaces';
import { BasicMap } from '../shared/models';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class MercatorMapProviderService extends MapProvider {
  static async loadMap(url: string, objects: string, stroke: number): Promise<GeoMap> {
    return new BasicMap(
      d3.geoMercator().scale(2400).translate([600, 2100]),
      await d3.json(url) as any,
      objects,
      stroke
    );
  }

  private static readonly availableMaps: {[key: string]: Promise<GeoMap>} = {
  }

  private mapChange: ReplaySubject<GeoMap> = new ReplaySubject();

  maps = () => Object.keys(MercatorMapProviderService.availableMaps);
  
  loadMap(name: string): void {
    MercatorMapProviderService.availableMaps[name].then(map => this.mapChange.next(map));
  }

  mapUpdated = () => this.mapChange.asObservable();
}
