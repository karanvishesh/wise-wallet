import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { LoginPageComponent } from '../login-page/login-page.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private modalService = inject(NgbModal);

	open() {
		const modalRef = this.modalService.open(LoginPageComponent);
		modalRef.componentInstance.name = 'World';
	}
}
