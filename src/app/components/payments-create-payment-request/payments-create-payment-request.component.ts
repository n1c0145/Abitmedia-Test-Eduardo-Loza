import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../services/cloud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface Values {
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

  CompanyType: Values[] = [
    { value: 'Persona Natural', viewValue: 'Persona Natural' },
    { value: 'Empresa', viewValue: 'Empresa' },
  ];
  DocumentType: Values[] = [
    { value: '01', viewValue: 'Cédula de identidad' },
    { value: '02', viewValue: 'RUC, Pasaporte' },
    { value: '03', viewValue: 'ID del exterior' },
  ];

  Tax: Values[] = [
    { value: '0.12', viewValue: 'IVA 12%' },
    { value: '0.00', viewValue: '0%' },
  ];

  Gateway: Values[] = [
    { value: '1', viewValue: 'Alignet' },
    { value: '2', viewValue: 'Payphone' },
    { value: '3', viewValue: 'Datafast' },
    { value: '4', viewValue: 'Paymentez' },
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
      companyType: ['', Validators.required],
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
    var formData: any = new FormData();
    formData.append('companyType', this.Formulario.get('companyType')?.value);
    formData.append('document', this.Formulario.get('document')?.value);
    formData.append('documentType', this.Formulario.get('documentType')?.value);
    formData.append('fullName', this.Formulario.get('fullName')?.value);
    formData.append('address', this.Formulario.get('address')?.value);
    formData.append('mobile', this.Formulario.get('mobile')?.value);
    formData.append('email', this.Formulario.get('email')?.value);
    formData.append('reference', this.Formulario.get('reference')?.value);
    formData.append('description', this.Formulario.get('description')?.value);
    formData.append('amount', this.Formulario.get('amount')?.value);
    formData.append('amountWithTax', this.Formulario.get('amountWithTax')?.value);
    formData.append('amountWithoutTax', this.Formulario.get('amountWithoutTax')?.value);
    formData.append('tax', this.Formulario.get('tax')?.value);
    formData.append('gateway', this.Formulario.get('gateway')?.value);
    formData.append('', this.Formulario.get('')?.value);

this._cloudService.paymentCreate(this.accessToken, formData).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success('Solicitud creada con exito');
      },
      (error) => {
        this.toastr.error('Ocurrio un error intente de nuevo');

       // console.log(error);
      }
    );
  }
}
