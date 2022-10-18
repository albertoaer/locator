import { Observable } from "rxjs";

export interface ArtifactEvent {
  /**
   * Artifact unique identifier
   */
  id: number;
  /**
   * Artifact name
   */
  name: string;
  /**
   * Artifact type name
   */
  type: string;
  event: 'UP' | 'DOWN' | 'NOTIFY' | 'UPDATE';
  location: [number, number];
  data: any | undefined;
  /**
   * Only Available on UP and UPDATE
   */
  actions: string[] | undefined;
}

export abstract class ArtifactManager {
  abstract listen(): Observable<ArtifactEvent>
}

export interface Artifact {
  id: number;
  name: string;
  location: [number, number];
}