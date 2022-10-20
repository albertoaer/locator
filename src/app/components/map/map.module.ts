import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MapRendererComponent } from './map-renderer/map-renderer.component';
import { ArtifactRendererComponent } from './artifact-renderer/artifact-renderer.component';

@NgModule({
  declarations: [
    MapComponent,
    MapViewComponent,
    MapRendererComponent,
    ArtifactRendererComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
