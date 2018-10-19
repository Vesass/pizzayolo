import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCarteComponent } from './our-carte.component';

describe('OurCarteComponent', () => {
  let component: OurCarteComponent;
  let fixture: ComponentFixture<OurCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
