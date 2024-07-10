import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { CourseSectionComponent } from './course-section/course-section.component';
import { FooterComponent } from './footer/footer.component';
import { PartnersBannerComponent } from './partners-banner/partners-banner.component';
import { UtenteService } from '../services/utente/utente.service';
import { CorsoService } from '../services/corso/corso.service';
import { UtenteDto } from '../model/dto/utenteDto.model';
import { Tipologia } from '../model/tipologia.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, 
    HeroSectionComponent, FormWrapperComponent,
    CourseSectionComponent, FooterComponent,
    PartnersBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(private utenteService: UtenteService, private corsoService: CorsoService) {

    // this.utenteService.getUtenti().subscribe(result => {
    //   console.log(result);
    // });

    // this.utenteService.getUtenteById(27).subscribe(result => {
    //   console.log(result);
    // });

    // this.utenteService.getUtenteByEmail('cr7@example.com').subscribe(result => {
    //   console.log(result);
    // });
  
    // let updatedUtente: UtenteDto = {
    //   firstname: 'Piero',
    //   lastname: 'Storti',
    //   email: 'pierostorti@gmail.com',
    //   password: 'test1234@',
    //   roles: [Tipologia.Utente, Tipologia.Docente],
    // }

    // this.utenteService.updateUtenteByEmail('pierostorti@gmail.com', updatedUtente).subscribe(result => {
    //   console.log('Utente updated successfully:', result);
    // },);

    // this.utenteService.deleteUtenteById(30).subscribe(result => {
    //   console.log('Utente deleted successfully:', result);
    // })

    // this.utenteService.deleteUtenteByEmail('tiziano@gmail.com').subscribe(result => {
    //   console.log('Utente deleted successfully:', result);
    // })

    // this.corsoService.getCorsi().subscribe(result => {
    //   console.log(result);
    // });

    // this.corsoService.getCorsoById(1).subscribe(result => {
    //   console.log(result);
    // });

    // this.corsoService.getCorsoByNome('Angular').subscribe(result => {
    //   console.log(result);
    // });

    // this.corsoService.getCorsoByHours(100).subscribe(result => {
    //   console.log(result);
    // });
  }
}