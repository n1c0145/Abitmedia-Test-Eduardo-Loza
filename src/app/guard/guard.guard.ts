import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProtectGuard implements CanActivate {
  constructor(private readonly _router: Router) {}
  canActivate(): boolean {
    const valorLocal = localStorage.getItem('login');

    if (valorLocal == 'login') {
      return true;
    }else{
      this._router.navigate(['/']);
      return false;
    }
  }
}
