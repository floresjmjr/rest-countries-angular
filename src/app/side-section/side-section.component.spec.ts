import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSectionComponent } from './side-section.component';

describe('SideSectionComponent', () => {
  let component: SideSectionComponent;
  let fixture: ComponentFixture<SideSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideSectionComponent]
    });
    fixture = TestBed.createComponent(SideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
