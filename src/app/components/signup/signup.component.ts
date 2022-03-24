import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequest } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: UserRequest = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  constructor(
    private auth: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.user);
    this.auth.signUp(this.user).subscribe(
      resp => {
        console.log(resp);
        localStorage.setItem('token', resp.token);
        this.router.navigate(['/posts']);
      }, error => {
        console.log(error);
      }
    )
  }

}
