import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatechatsComponent } from './privatechats.component';

describe('PrivatechatsComponent', () => {
  let component: PrivatechatsComponent;
  let fixture: ComponentFixture<PrivatechatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatechatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatechatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
