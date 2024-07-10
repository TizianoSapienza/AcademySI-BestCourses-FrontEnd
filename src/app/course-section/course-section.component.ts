import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { Course } from '../../model/course.model';

@Component({
  selector: 'app-course-section',
  standalone: true,
  imports: [CourseCardComponent, CommonModule],
  templateUrl: './course-section.component.html',
  styleUrl: './course-section.component.css'
})
export class CourseSectionComponent {
  
  public courses: Course[] = [
    new Course(
      'Corso FrontEnd',
      'Impara HTML, CSS e JavaScript per costruire pagine web interattive. Questo corso copre tutto, dalla struttura base delle pagine HTML, all\'utilizzo di CSS per il design e la responsività, fino a JavaScript per l\'interattività avanzata. Ideale per principianti e per chi vuole perfezionare le proprie competenze front-end.',
      'assets/card1.avif'
    ),
    new Course(
      'Corso BackEnd',
      'Impara Java passo dopo passo e costruisci applicazioni backend. Questo corso ti guida attraverso le basi del linguaggio di programmazione Java, le strutture dati, la gestione dei database e lo sviluppo di API RESTful. Perfetto per chi vuole intraprendere una carriera nello sviluppo backend.',
      'assets/card2.avif'
    ),
    new Course(
      'Corso FullStack',
      'Diventa un esperto di Node.js con questo corso completo. Scopri come sviluppare applicazioni full-stack usando JavaScript per il frontend e Node.js per il backend. Copriremo tutto, dall\'impostazione del server, alla gestione delle richieste HTTP, fino all\'integrazione con database NoSQL come MongoDB.',
      'assets/card3.avif'
    ),
    new Course(
      'Corso CyberSecurity',
      'Impara a controllare la sicurezza informatica con questo corso. Affronteremo i principali concetti di cybersecurity, tra cui crittografia, analisi delle vulnerabilità, gestione dei rischi e protezione delle reti. Ideale per chi vuole approfondire le proprie conoscenze sulla sicurezza e protezione dei dati online.',
      'assets/card4.avif'
    )
  ];    
}
