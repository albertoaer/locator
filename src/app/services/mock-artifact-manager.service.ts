import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ArtifactManager, ArtifactEvent } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MockArtifactManagerService extends ArtifactManager {
  private mockEvents = new Subject<ArtifactEvent>();

  listen = () => this.mockEvents.asObservable();
}
