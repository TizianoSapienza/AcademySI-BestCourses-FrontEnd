import { Component } from '@angular/core';
import { CourseGeneralComponent } from "../../components/course-general/course-general.component";

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [CourseGeneralComponent],
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css'
})
export class CoursesPageComponent {

}
