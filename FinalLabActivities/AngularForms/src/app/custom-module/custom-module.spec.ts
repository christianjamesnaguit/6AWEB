import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModule } from './custom-module';

describe('CustomModule', () => {
  let component: CustomModule;
  let fixture: ComponentFixture<CustomModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomModule);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
