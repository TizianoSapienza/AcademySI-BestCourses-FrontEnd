import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  constructor() {
    this.courseTitle = '';
    this.courseDescription = '';
    this.courseImage = '';
   }

  //Input viene usato per passare valori da un componente (padre) all'altro (figlio). In questo caso, il
  //componente figlio (app-course-card) ricevera' i valori dal componente padre (app-course-section)
  @Input() courseTitle: string;
  @Input() courseDescription: string;
  @Input() courseImage: string;
  @Input() courseLink: string = '';

  isExpanded: boolean = false;

  toggleDescription(): void {
    this.isExpanded = !this.isExpanded;
  }
}
