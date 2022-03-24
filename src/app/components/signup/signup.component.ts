import { Component, OnInit } from '@angular/core';
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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.user);
    this.auth.signUp(this.user).subscribe(
      resp => {
      }, error => {
      }
    )
  }

}
