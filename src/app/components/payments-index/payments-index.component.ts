import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../services/cloud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments-index',
  templateUrl: './payments-index.component.html',
  styleUrls: ['./payments-index.component.css'],
})
export class PaymentsIndexComponent implements OnInit {
  public load: Boolean = false;
  token = "2y-13-tx-zsjtggeehkmygjbtsf-51z5-armmnw-ihbuspjufwubv4vxok6ery7wozao3wmggnxjgyg"
  payments:any=[]
  constructor(private _cloudService: CloudService,private router: Router) {}

  ngOnInit(): void {

    this.listar()
  }

  listar() {
    this._cloudService.paymentIndex(this.token).subscribe((data) => {
      this.payments=data.data
      this.load = true;
     // console.log(this.payments);
    },
    (error) => {
      console.log(error);
    });
  }
  status(token:any){
     localStorage.setItem('token',token);
     this.router.navigate(['/payments-status-transaction']);
  }
  reverse(token:any){
    localStorage.setItem('token',token);
    this.router.navigate(['/payments-reverse']);
  }
}
