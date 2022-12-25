import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesExampleComponent } from './modules-example.component';

describe('ModulesExampleComponent', () => {
  let component: ModulesExampleComponent;
  let fixture: ComponentFixture<ModulesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulesExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
