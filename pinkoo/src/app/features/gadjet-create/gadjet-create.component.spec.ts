import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadjetCreateComponent } from './gadjet-create.component';

describe('GadjetCreateComponent', () => {
  let component: GadjetCreateComponent;
  let fixture: ComponentFixture<GadjetCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GadjetCreateComponent]
    });
    fixture = TestBed.createComponent(GadjetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
