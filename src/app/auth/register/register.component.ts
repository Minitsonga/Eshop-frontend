import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user = { username: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(() => {
      this.router.navigate(['/auth/login']);
    }, error => {
      alert("Erreur d'inscription");
    });
  }
}
