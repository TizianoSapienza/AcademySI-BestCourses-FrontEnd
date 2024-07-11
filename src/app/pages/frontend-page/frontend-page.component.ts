import { Component, OnInit } from '@angular/core';
import { CorsoService } from '../../../services/corso/corso.service';
import { Corso } from '../../../model/corso.model';
import { CourseCardComponent } from "../../components/course-card/course-card.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseGeneralComponent } from "../../components/course-general/course-general.component";

@Component({
  selector: 'app-frontend-page',
  standalone: true,
  imports: [CourseGeneralComponent, CommonModule],
  templateUrl: './frontend-page.component.html',
  styleUrl: './frontend-page.component.css'
})

export class FrontendPageComponent implements OnInit {
  courses: Corso[] = [];
  constructor(private corsoService: CorsoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.corsoService.getCorsoByCategoryId(1).subscribe((data: Corso[]) => {
      this.courses = data;
      console.log(this.courses);
    });
  }
}
