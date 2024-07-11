import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { PartnersBannerComponent } from "../../components/partners-banner/partners-banner.component";
import { CourseGeneralComponent } from "../../components/course-general/course-general.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, HeroSectionComponent, PartnersBannerComponent, CourseGeneralComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
