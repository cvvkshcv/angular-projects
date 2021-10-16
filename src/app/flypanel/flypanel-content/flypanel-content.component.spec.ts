import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlypanelContentComponent } from './flypanel-content.component';

describe('FlypanelContentComponent', () => {
  let component: FlypanelContentComponent;
  let fixture: ComponentFixture<FlypanelContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlypanelContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlypanelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
