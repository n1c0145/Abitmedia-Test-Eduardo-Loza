import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../services/cloud.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payments-index',
  templateUrl: './payments-index.component.html',
  styleUrls: ['./payments-index.component.css'],
  
})
export class PaymentsIndexComponent implements OnInit {
 

  

  public load: Boolean = false;
  token = '';
  access_token = "2y-13-tx-zsjtggeehkmygjbtsf-51z5-armmnw-ihbuspjufwubv4vxok6ery7wozao3wmggnxjgyg"
  payments:any=[]
  constructor(private _cloudService: CloudService,private router: Router,private toastr: ToastrService) {}

  ngOnInit(): void {

    this.listar()
  }

  listar() {
    this._cloudService.paymentIndex(this.access_token).subscribe((data) => {
      this.payments=data.data
      this.load = true;
      console.log(this.payments);
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
this._cloudService.paymentReverse(this.access_token, token).subscribe((data)=>{
       //console.log(data);
       if (data.message == 'Reverso realizado exitosamente') {
        this.toastr.info(data.message);
      } else {
        this.toastr.error(data.message);
      }
    },
    (error) => {
      console.log(error);
    })
  }
}
