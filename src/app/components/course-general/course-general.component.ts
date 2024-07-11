import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { Course } from '../../../model/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-general',
  standalone: true,
  imports: [CourseCardComponent, CommonModule],
  templateUrl: './course-general.component.html',
  styleUrl: './course-general.component.css'
})
export class CourseGeneralComponent {
  constructor() {}

  public courses: Course[] = [
    new Course(
      'Frontend',
      'Impara a progettare e creare pagine web interattive e responsive con HTML, CSS e JavaScript, acquisendo competenze per sviluppare siti moderni e funzionali.',
      'assets/card1.avif',
      'frontend'
    ),
    new Course(
      'Backend',
      'Scopri come sviluppare applicazioni server-side con Java, gestire database, creare API e strutture dati, diventando un esperto di programmazione back-end.',
      'assets/card2.avif',
      'backend'
    ),
    new Course(
      'Fullstack',
      'Diventa un professionista nello sviluppo web completo, integrando competenze frontend e backend per creare applicazioni web efficienti e interattive.',
      'assets/card3.avif',
      'fullstack'
    ),
    new Course(
      'Cybersec',
      'Impara a proteggere dati e sistemi online, acquisendo conoscenze su principi di sicurezza, analisi delle vulnerabilità e strategie di gestione dei rischi.',
      'assets/card4.avif',
      'cybersec'
    )
  ];
}