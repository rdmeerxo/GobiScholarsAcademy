import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInvolvedComponent } from './get-involved.component';

describe('NewsComponent', () => {
  let component: GetInvolvedComponent;
  let fixture: ComponentFixture<GetInvolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInvolvedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
