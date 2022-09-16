import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'abitmedia-test-eduardo-loza';
  public load: Boolean = false;
  ngOnInit(): void {

   var login = localStorage.getItem('login');
   if (login==="login") {
    this.load=true;
   }
  }

}
