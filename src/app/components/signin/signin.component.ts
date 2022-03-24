import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRequestLogin } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: UserRequestLogin = {
    email: '',
    password: ''
  }

  constructor(
    private auth: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.auth.signIn(this.user).subscribe(
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
