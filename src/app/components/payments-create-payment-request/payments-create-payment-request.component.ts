import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../services/cloud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-payments-create-payment-request',
  templateUrl: './payments-create-payment-request.component.html',
  styleUrls: ['./payments-create-payment-request.component.css'],
})
export class PaymentsCreatePaymentRequestComponent implements OnInit {
  Formulario: FormGroup;

  City: City[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  accessToken =
    '2y-13-tx-zsjtggeehkmygjbtsf-51z5-armmnw-ihbuspjufwubv4vxok6ery7wozao3wmggnxjgyg';
  companyType = '';
  document = '';
  documentType = '';
  fullName = '';
  address = '';
  mobile = '';
  email = '';
  reference = '';
  description = '';
  amount = 0;
  amountWithTax = 0;
  amountWithoutTax = 0;
  tax = 0;
  gateway = 0;

  constructor(
    private _cloudService: CloudService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.Formulario = this.fb.group({
      cityName: ['', [Validators.required]],
      // companyType: ['', Validators.required],
      document: ['', Validators.required],
      documentType: ['', Validators.required],
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      reference: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
      amountWithTax: ['', Validators.required],
      amountWithoutTax: ['', Validators.required],
      tax: ['', Validators.required],
      gateway: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  enviar() {
    alert(this.Formulario.get('cityName')?.value);
    // this.companyType = this.Formulario.get('companyType')?.value;
    this.document = this.Formulario.get('document')?.value;
    this.documentType = this.Formulario.get('documentType')?.value;
    this.fullName = this.Formulario.get('fullName')?.value;
    this.address = this.Formulario.get('address')?.value;
    this.mobile = this.Formulario.get('mobile')?.value;
    this.email = this.Formulario.get('email')?.value;
    this.reference = this.Formulario.get('reference')?.value;
    this.description = this.Formulario.get('description')?.value;
    this.amount = this.Formulario.get('amount')?.value;
    this.amountWithTax = this.Formulario.get('amountWithTax')?.value;
    this.amountWithoutTax = this.Formulario.get('amountWithoutTax')?.value;
    this.tax = this.Formulario.get('tax')?.value;
    this.gateway = this.Formulario.get('gateway')?.value;

    this._cloudService
      .paymentCreate(
        this.accessToken,
        this.companyType,
        this.document,
        this.documentType,
        this.fullName,
        this.address,
        this.mobile,
        this.email,
        this.reference,
        this.description,
        this.amount,
        this.amountWithTax,
        this.amountWithoutTax,
        this.tax,
        this.gateway
      )
      .subscribe(
        (data) => {
          // console.log(data);
          this.toastr.success('Creado correctamente');
        },
        (error) => {
          //console.log(error);
          this.toastr.success('Creado correctamente');
        }
      );
  }
}
