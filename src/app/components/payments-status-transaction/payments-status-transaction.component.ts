import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../services/cloud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payments-status-transaction',
  templateUrl: './payments-status-transaction.component.html',
  styleUrls: ['./payments-status-transaction.component.css'],
})
export class PaymentsStatusTransactionComponent implements OnInit {
  Formulario: FormGroup;
  token = '';
  accessToken =
    '2y-13-tx-zsjtggeehkmygjbtsf-51z5-armmnw-ihbuspjufwubv4vxok6ery7wozao3wmggnxjgyg';

  // token = "2y-13-e8fskjeelgzmmc-ga-td-ezjtayre52gja9f5dlbkz-ralvqdqdgi"
  constructor(
    private _cloudService: CloudService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
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

    this._cloudService.paymentStatus(this.accessToken, this.token).subscribe(
      (data) => {
      //  console.log(data);

        if (data.message == 'Información de la transacción') {
          this.toastr.info(data.data.message, data.message);
        } else {
          this.toastr.error(data.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
