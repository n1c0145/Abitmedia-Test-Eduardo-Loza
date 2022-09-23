import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!localStorage.getItem('load')) { 
      localStorage.setItem('load', 'no reload') 
      setTimeout( function() { location.reload() ; }, 1000);
      
    } else {
      localStorage.removeItem('load') 
    }
  }

}
