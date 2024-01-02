import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './views/shared/login-page/login-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, LandingPageComponent, FormsModule, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wise-wallet';
}
