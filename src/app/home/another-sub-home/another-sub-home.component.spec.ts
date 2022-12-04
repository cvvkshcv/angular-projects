import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherSubHomeComponent } from './another-sub-home.component';

describe('AnotherSubHomeComponent', () => {
  let component: AnotherSubHomeComponent;
  let fixture: ComponentFixture<AnotherSubHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherSubHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherSubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
