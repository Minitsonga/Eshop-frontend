import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { usernameOrEmail: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.credentials).subscribe(() => {
      this.router.navigate(['/']);
    }, error => {
      alert("Erreur d'authentification");
    });
  }
}
