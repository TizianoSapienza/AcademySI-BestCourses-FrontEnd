import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-banner.component.html',
  styleUrl: './partners-banner.component.css'
})
export class PartnersBannerComponent {

  partners = [
    { src: 'assets/partner-1.jpg', alt: 'Partner 1' },
    { src: 'assets/partner-2.jpg', alt: 'Partner 2' },
    { src: 'assets/partner-3.jpg', alt: 'Partner 3' },
    { src: 'assets/partner-1.jpg', alt: 'Partner 4' },
    { src: 'assets/partner-2.jpg', alt: 'Partner 5' },
    { src: 'assets/partner-3.jpg', alt: 'Partner 6' }
  ];
}
