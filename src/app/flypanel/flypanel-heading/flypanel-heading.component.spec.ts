import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlypanelHeadingComponent } from './flypanel-heading.component';

describe('FlypanelHeadingComponent', () => {
  let component: FlypanelHeadingComponent;
  let fixture: ComponentFixture<FlypanelHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlypanelHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlypanelHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
