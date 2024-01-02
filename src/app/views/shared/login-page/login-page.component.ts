import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CheckboxModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
