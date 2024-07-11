import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import { CourseGeneralComponent } from './components/course-general/course-general.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartnersBannerComponent } from './components/partners-banner/partners-banner.component';
import { UtenteService } from '../services/utente/utente.service';
import { CorsoService } from '../services/corso/corso.service';
import { UtenteDto } from '../model/dto/utenteDto.model';
import { Tipologia } from '../model/tipologia.model';
import { CorsoRegistrazioneDto } from '../model/dto/corsoRegistrazioneDto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    NavbarComponent, HeroSectionComponent, 
    FormWrapperComponent, CourseGeneralComponent,
    FooterComponent, PartnersBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(private utenteService: UtenteService, private corsoService: CorsoService) {

    let isLoginPage : boolean = false;
    let isRegisterPage : boolean = false;
    let isCoursePage : boolean = false;
    //TEST UTENTI

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



    //TEST CORSI

    // let newCorso: CorsoRegistrazioneDto = {
    //   nomeCorso: 'Node.js Developer',
    //   descrizioneBreve: 'Corso avanzato su Node.js',
    //   descrizioneCompleta: 'Corso che copre lo sviluppo backend con Node.js, Express e MongoDB',
    //   durata: 300,
    //   categoriaId: 2
    // }

    // this.corsoService.registerCorso(newCorso).subscribe(result => {
    //   console.log("Course registered " + result);
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
    
    // this.corsoService.getCorsoByCategoryId(2).subscribe(result => {
    //   console.log(result);
    // })
  }
}