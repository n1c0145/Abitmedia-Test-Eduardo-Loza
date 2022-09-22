import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  
  user = '';
  password = '';



  constructor(private router: Router, private toastr: ToastrService) {
   
  }

  ngOnInit(): void {}
  submit(): void {
    if (this.user === 'test' && this.password === 'test') {
      localStorage.setItem('login', 'login');
      this.router.navigate(['/dashboard']);
      this.toastr.success('Bienvenido');
    } else {
      this.toastr.error('Usuario o contraseña incorrectos');
    }
  }
}
