import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassCreateComponent } from './class-create.component';

describe('ClassCreateComponent', () => {
  let component: ClassCreateComponent;
  let fixture: ComponentFixture<ClassCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassCreateComponent]
    });
    fixture = TestBed.createComponent(ClassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
