import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliesComponent } from './applies.component';

describe('AppliesComponent', () => {
  let component: AppliesComponent;
  let fixture: ComponentFixture<AppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
