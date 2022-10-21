import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artifact, ArtifactManager } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MockArtifactManagerService extends ArtifactManager {
  private currentArtifacts: Artifact[] = [];
  private mockEvents = new BehaviorSubject<Artifact[]>(this.currentArtifacts);

  random(min: number, max: number): number {
    return ((max - min) * Math.random()) + min;
  }

  constructor() {
    super();
    setInterval(() => {
      this.currentArtifacts.push({
        id: 0,
        imageURL: '',
        location: [this.random(-90, 90), this.random(-180, 180)],
        name: 'Test'
      });
      this.mockEvents.next(this.currentArtifacts);
    }, 1000);
  }

  artifacts(): Observable<Artifact[]> {
    return this.mockEvents.asObservable();
  }
}
