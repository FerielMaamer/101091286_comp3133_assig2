import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username = '';
  email='';
  password = '';


  constructor(private authService: AuthService) { }

  onSignup() {
    this.authService.signup(this.username, this.email, this.password).subscribe(result => {
      console.log(result);
      // handle the result
    });
  }
}
