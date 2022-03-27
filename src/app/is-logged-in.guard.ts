import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth.loggedIn()) {
      return true;
    }

    this.router.navigate(['/posts']);

    return false;
  }
  
}
