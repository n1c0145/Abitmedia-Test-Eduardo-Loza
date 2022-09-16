import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user=''
  password=''

  constructor(private router: Router) {}

  ngOnInit(): void {}
  submit(): void {

if (this.user==='test'&&this.password==='test') {
  alert('hi');
  localStorage.setItem('login','login');
  this.router.navigate(['/inicio']);
}else{
  alert('incorrecto')
}

  }
}
