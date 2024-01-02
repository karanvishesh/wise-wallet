import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ImpactSectionComponent } from './impact-section/impact-section.component';
import { ProductinfoSectionComponent } from './productinfo-section/productinfo-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroSectionComponent, ImpactSectionComponent, ProductinfoSectionComponent,FooterSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
