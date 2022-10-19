import { Component, AfterViewInit } from '@angular/core';

import { MapProvider } from 'src/app/shared/interfaces/maps';
import { MercatorMapProviderService } from 'src/app/services/mercator-map-provider.service';
import { Artifact, ArtifactManager } from 'src/app/shared/interfaces';
import { MockArtifactManagerService } from 'src/app/services/mock-artifact-manager.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  viewProviders: [
    { provide: MapProvider, useExisting: MercatorMapProviderService },
    { provide: ArtifactManager, useExisting: MockArtifactManagerService }
  ]
})
export class MapComponent implements AfterViewInit {

  artifacts: Artifact[] = [];
  zoom: d3.ZoomTransform | undefined = undefined;

  constructor(
    protected mapProvider: MapProvider,
    protected artifactManager: ArtifactManager
  ) {
    this.artifacts.push();
  }
  
  ngAfterViewInit(): void {
    this.mapProvider.loadMap(this.mapProvider.maps()[0]);
  }

  applyZoom(transform: d3.ZoomTransform) {
    this.zoom = transform;
  }
}
