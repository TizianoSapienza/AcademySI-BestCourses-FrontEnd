import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPageComponent } from './backend-page.component';

describe('BackendPageComponent', () => {
  let component: BackendPageComponent;
  let fixture: ComponentFixture<BackendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
