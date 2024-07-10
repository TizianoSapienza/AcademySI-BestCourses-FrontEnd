import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  @Input()
  title: string = 'Benvenuti su Best Courses';

  subtitle: string = 'Corsi di formazione online per tutti. Scopri le migliori offerte!';

  getTitle (): string {
    return this.title;
  }
}
