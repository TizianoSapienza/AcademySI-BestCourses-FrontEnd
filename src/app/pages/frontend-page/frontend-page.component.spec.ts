import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendPageComponent } from './frontend-page.component';

describe('FrontendPageComponent', () => {
  let component: FrontendPageComponent;
  let fixture: ComponentFixture<FrontendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
