import { Component, OnInit } from '@angular/core';
import { CorsoService } from '../../../services/corso/corso.service';
import { Corso } from '../../../model/corso.model';
import { CourseCardComponent } from "../../components/course-card/course-card.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontend-page',
  standalone: true,
  imports: [CourseCardComponent, CommonModule],
  templateUrl: './frontend-page.component.html',
  styleUrl: './frontend-page.component.css'
})

export class FrontendPageComponent implements OnInit {
  courses: Corso[] = [];

  constructor(private corsoService: CorsoService, private router: Router) {}

  ngOnInit(): void {
    this.corsoService.getCorsoByCategoryId(1).subscribe((data: Corso[]) => {
      this.courses = data;
    });
  }
}