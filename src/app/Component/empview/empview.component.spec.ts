import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMpviewComponent } from './empview.component';

describe('EMpviewComponent', () => {
  let component: EMpviewComponent;
  let fixture: ComponentFixture<EMpviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMpviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMpviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
