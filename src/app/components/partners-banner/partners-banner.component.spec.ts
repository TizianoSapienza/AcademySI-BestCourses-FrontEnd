import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersBannerComponent } from './partners-banner.component';

describe('PartnersBannerComponent', () => {
  let component: PartnersBannerComponent;
  let fixture: ComponentFixture<PartnersBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
