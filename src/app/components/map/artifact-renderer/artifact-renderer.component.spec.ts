import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactRendererComponent } from './artifact-renderer.component';

describe('ArtifactRendererComponent', () => {
  let component: ArtifactRendererComponent;
  let fixture: ComponentFixture<ArtifactRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtifactRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
