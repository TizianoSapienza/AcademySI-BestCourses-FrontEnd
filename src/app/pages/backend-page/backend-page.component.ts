import { Component } from '@angular/core';
import { Corso } from '../../../model/sub-corso.model';
import { CorsoService } from '../../../services/corso/corso.service';
import { Router } from '@angular/router';
import { CourseGeneralComponent } from '../../components/course-general/course-general.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-backend-page',
  standalone: true,
  imports: [CourseGeneralComponent, CommonModule],
  templateUrl: './backend-page.component.html',
  styleUrl: './backend-page.component.css'
})

export class BackendPageComponent {
  courses: Corso[] = [];

  constructor(private corsoService: CorsoService, private router: Router) {}

  ngOnInit(): void {
    this.corsoService.getCorsoByCategoryId(2).subscribe((data: Corso[]) => {
      this.courses = data;
      console.log(this.courses);
    });
  }
}
