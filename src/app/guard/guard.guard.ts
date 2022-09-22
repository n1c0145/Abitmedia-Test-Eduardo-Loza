import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ProtectGuard implements CanActivate {
  constructor(
    private readonly _router: Router,
    private toastr: ToastrService
  ) {}
  canActivate(): boolean {
    const valorLocal = localStorage.getItem('login');

    if (valorLocal == 'login') {
      return true;
    } else {
      this._router.navigate(['/']);
      this.toastr.error('Inicia Sesion');
      return false;
    }
  }
}
