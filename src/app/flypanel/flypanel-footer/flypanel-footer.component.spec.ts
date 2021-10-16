import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlypanelFooterComponent } from './flypanel-footer.component';

describe('FlypanelFooterComponent', () => {
  let component: FlypanelFooterComponent;
  let fixture: ComponentFixture<FlypanelFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlypanelFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlypanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
