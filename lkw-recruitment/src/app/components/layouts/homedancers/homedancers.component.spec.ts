import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedancersComponent } from './homedancers.component';

describe('HomedancersComponent', () => {
  let component: HomedancersComponent;
  let fixture: ComponentFixture<HomedancersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedancersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
