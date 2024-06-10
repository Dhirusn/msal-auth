// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private msalService: MsalService, private router: Router) { }

  async login() {
    try {
      const response = await this.msalService.loginPopup().toPromise();
      this.msalService.instance.setActiveAccount(response!.account);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    try {
      await this.msalService.logoutPopup().toPromise();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }

  isAuthenticated(): boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }
}
