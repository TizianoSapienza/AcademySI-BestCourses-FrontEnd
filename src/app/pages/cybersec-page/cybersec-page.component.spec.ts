import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecPageComponent } from './cybersec-page.component';

describe('CybersecPageComponent', () => {
  let component: CybersecPageComponent;
  let fixture: ComponentFixture<CybersecPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybersecPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybersecPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
