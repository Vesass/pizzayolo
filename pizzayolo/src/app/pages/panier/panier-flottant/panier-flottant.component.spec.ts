import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierFlottantComponent } from './panier-flottant.component';

describe('PanierFlottantComponent', () => {
  let component: PanierFlottantComponent;
  let fixture: ComponentFixture<PanierFlottantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierFlottantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierFlottantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
