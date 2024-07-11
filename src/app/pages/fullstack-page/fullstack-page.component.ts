import { Component } from '@angular/core';
import { Corso } from '../../../model/corso.model';
import { CorsoService } from '../../../services/corso/corso.service';
import { Router } from '@angular/router';
import { CourseGeneralComponent } from '../../components/course-general/course-general.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fullstack-page',
  standalone: true,
  imports: [CourseGeneralComponent, CommonModule],
  templateUrl: './fullstack-page.component.html',
  styleUrl: './fullstack-page.component.css'
})

export class FullstackPageComponent {
  courses: Corso[] = [];

  constructor(private corsoService: CorsoService, private router: Router) {}

  ngOnInit(): void {
    this.corsoService.getCorsoByCategoryId(3).subscribe((data: Corso[]) => {
      this.courses = data;
      console.log(this.courses);
    });
  }
}
