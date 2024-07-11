import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseGeneralComponent } from './course-general.component';

describe('CourseSectionComponent', () => {
  let component: CourseGeneralComponent;
  let fixture: ComponentFixture<CourseGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
