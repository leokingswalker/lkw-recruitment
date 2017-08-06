import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DancersPageComponent } from './dancers-page.component';

describe('DancersPageComponent', () => {
  let component: DancersPageComponent;
  let fixture: ComponentFixture<DancersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DancersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DancersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
