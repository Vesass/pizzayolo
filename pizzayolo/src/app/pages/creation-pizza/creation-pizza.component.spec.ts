import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPizzaComponent } from './creation-pizza.component';

describe('CreationPizzaComponent', () => {
  let component: CreationPizzaComponent;
  let fixture: ComponentFixture<CreationPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
