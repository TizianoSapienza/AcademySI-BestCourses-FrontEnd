import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackPageComponent } from './fullstack-page.component';

describe('FullstackPageComponent', () => {
  let component: FullstackPageComponent;
  let fixture: ComponentFixture<FullstackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullstackPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullstackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
