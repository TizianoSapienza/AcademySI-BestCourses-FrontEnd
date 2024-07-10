import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  constructor() {
    this.courseTitle = '';
    this.courseDescription = '';
    this.courseImage = '';
   }

  @Input() courseTitle: string;
  @Input() courseDescription: string;
  @Input() courseImage: string;

  isExpanded: boolean = false;

  toggleDescription(): void {
    this.isExpanded = !this.isExpanded;
  }
}
