import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.user = { username: 'UtilisateurTest', email: 'test@email.com' };
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
