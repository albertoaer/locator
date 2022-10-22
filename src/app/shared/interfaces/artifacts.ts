import { Observable } from "rxjs";

export interface Artifact {
  id: number;
  name: string;
  location: [number, number];
  imageURL: string | null;
  type?: string;
  description?: string;
}

export abstract class ArtifactManager {
  abstract artifacts(): Observable<Artifact[]>;
}