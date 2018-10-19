import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCarteComponent } from './your-carte.component';

describe('YourCarteComponent', () => {
  let component: YourCarteComponent;
  let fixture: ComponentFixture<YourCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
