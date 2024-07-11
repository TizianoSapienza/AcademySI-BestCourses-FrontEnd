import { Component, OnInit } from '@angular/core';
import { CourseGeneralComponent } from "../../components/course-general/course-general.component";
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-page',
  standalone: true,
  imports: [CourseGeneralComponent, RouterOutlet, CommonModule],
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css'
})
export class CoursesPageComponent implements OnInit {
  showCourseGeneral: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showCourseGeneral = router.url.includes('/courses') && !router.url.includes('/courses/');

        //Quando viene emesso un evento NavigationEnd, controlla se l'URL corrente include la stringa '/courses' 
        //ma non '/courses/'. In caso affermativo, imposta this.showCourseGeneral su true, altrimenti lo imposta su false
        //per nascondere il componente 'CourseGeneralComponent'.
      }
    });
  }
  
  ngOnInit(): void {}
}
