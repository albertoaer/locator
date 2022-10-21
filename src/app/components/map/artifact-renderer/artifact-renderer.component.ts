import { ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { MercatorMapProviderService } from 'src/app/services/mercator-map-provider.service';
import { Artifact, MapProvider } from 'src/app/shared/interfaces';

@Component({
  selector: 'svg:g[artifactRenderer]',
  styleUrls: [ './artifact-renderer.component.css' ],
  templateUrl: './artifact-renderer.component.html',
  providers: [
    { provide: MapProvider, useExisting: MercatorMapProviderService }
  ]
})
export class ArtifactRendererComponent implements OnInit {

  static readonly scaleRelation = 110;

  @Input()
  artifact: Artifact = { id: 0, location: [0, 0], name: 'NONE', imageURL: null };

  transform: string = "";
  r: number = 0;
  x: number = 0;
  y: number = 0;
  scale: number = 1;
  
  get fontSize(): number {
    return Math.floor(3 * Math.pow(4, 5/this.r)) - 1;
  }

  @Input()
  set zoom(transform: d3.ZoomTransform | undefined) {
    if (!transform) return;
    this.transform = transform.toString();
    this.r = this.scale/(ArtifactRendererComponent.scaleRelation*transform.k);
  }

  constructor(
    protected self: ElementRef, 
    protected mapProvider: MapProvider,
    private cdr: ChangeDetectorRef,
  ) {
  }
  
  ngOnInit(): void {
    this.mapProvider.mapUpdated().subscribe(map => {
      const newScale = map.projection().scale();
      this.r = this.r ?
        newScale*this.r/this.scale :
        newScale/ArtifactRendererComponent.scaleRelation;
      this.scale = newScale;
      [this.x, this.y] = map.coords(this.artifact.location);
      this.cdr.detectChanges();
    });
  }
}
