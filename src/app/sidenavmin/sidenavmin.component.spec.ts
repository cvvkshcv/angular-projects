import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavminComponent } from './sidenavmin.component';

describe('SidenavminComponent', () => {
  let component: SidenavminComponent;
  let fixture: ComponentFixture<SidenavminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
