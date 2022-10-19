import { Component, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import * as d3 from 'd3';
import { MercatorMapProviderService } from 'src/app/services/mercator-map-provider.service';
import { MapProvider } from 'src/app/shared/interfaces';

@Component({
  selector: 'svg[mapView]',
  template: '<ng-content></ng-content>',
  providers: [
    { provide: MapProvider, useExisting: MercatorMapProviderService }
  ]
})
export class MapViewComponent {

  @Output()
  readonly zoomEvent: EventEmitter<d3.ZoomTransform> = new EventEmitter();

  protected svg: d3.Selection<any, any, any, any>;

  readonly zoom = d3.zoom()
    .scaleExtent([0.1, 6])
    .on('zoom', e => this.zoomEvent.emit(e.transform));

  constructor(protected self: ElementRef, protected mapProvider: MapProvider) {
    this.svg = d3.select(self.nativeElement);
    this.svg
    .attr("preserveAspectRatio", "xMinYMin meet");

    this.svg.call(this.zoom);

    //mapProvider.mapUpdated().subscribe(m => this.zoom.translateExtent(m.domain()))
  }

  applyZoom(factor: number) {
    this.svg.transition().duration(100).call(this.zoom.scaleBy, factor)
  }
}
