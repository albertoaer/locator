import { Component, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';
import { MercatorMapProviderService } from 'src/app/services/mercator-map-provider.service';
import { GeoMap, MapProvider } from 'src/app/shared/interfaces';

@Component({
  selector: 'svg:g[mapRenderer]',
  template: '',
  providers: [
    { provide: MapProvider, useExisting: MercatorMapProviderService }
  ]
})
export class MapRendererComponent {

  map: GeoMap | undefined = undefined;
  protected g: d3.Selection<SVGGElement, any, any, any>;

  @Input()
  set zoom(transform: d3.ZoomTransform | undefined) {
    if (transform)
      this.g.select('.map').attr('transform', transform.toString());
  }

  constructor(protected self: ElementRef, protected mapProvider: MapProvider) {
    this.g = d3.select(self.nativeElement);

    this.g.append('g').attr('class', 'map');

    this.mapProvider.mapUpdated().subscribe(x => {
      this.map = x;
      this.map.apply(this.g.select('.map'));
    });
  }
}
