import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ImpactSectionComponent } from './impact-section/impact-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroSectionComponent, ImpactSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
