import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../services/cloud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payments-reverse',
  templateUrl: './payments-reverse.component.html',
  styleUrls: ['./payments-reverse.component.css']
})
export class PaymentsReverseComponent implements OnInit {
  Formulario: FormGroup;
  token = '';
  accessToken = "2y-13-tx-zsjtggeehkmygjbtsf-51z5-armmnw-ihbuspjufwubv4vxok6ery7wozao3wmggnxjgyg"
  constructor(   private _cloudService: CloudService,
    private fb: FormBuilder,
    private toastr: ToastrService) {
      this.Formulario = this.fb.group({
        token: ['', Validators.required],
      });
    }

  ngOnInit(): void {
    this.Formulario.setValue({
      token: localStorage.getItem('token'),
    });
    localStorage.removeItem('token');
  }

  enviar() {
    this.token = this.Formulario.get('token')?.value;

    this._cloudService.paymentReverse(this.accessToken, this.token).subscribe(
      (data) => {
        //console.log(data);
        if (data.message == 'Reverso realizado exitosamente') {
          this.toastr.info(data.message);
        } else {
          this.toastr.error(data.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }


  reverso() {
    this._cloudService.paymentReverse(this.accessToken,this.token).subscribe((data) => {
      console.log(data);
    });
  }
}
