import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CloudService {
  // url = 'https://cloud.abitmedia.com/api/payments/index?access-token=';

  url = 'https://cloud.abitmedia.com/api/payments/';

  constructor(private http: HttpClient) {}

  paymentIndex(token: string): Observable<any> {
    return this.http.get(this.url + 'index?access-token=' + token);
  }

  paymentReverse(accesToken: string, token: string): Observable<any> {
    return this.http.get(
      this.url + 'reverse?access-token=' + accesToken + '&token=' + token
    );
  }

  paymentStatus(accesToken: string, token: string): Observable<any> {
    return this.http.get(
      this.url +
        'status-transaction?access-token=' +
        accesToken +
        '&token=' +
        token
    );
  }

  paymentCreate(
    accesToken: string,
    companyType: string,
    document: string,
    documentType: string,
    fullName: string,
    address: string,
    mobile: string,
    email: string,
    reference: string,
    description: string,
    amount: Number,
    amountWithTax: Number,
    amountWithoutTax: Number,
    tax: Number,
    gateway: Number
  ): Observable<any> {
    return this.http.get(
      this.url +
        'create-payment-request?access-token=' +
        accesToken +
        '&companyType=' +
        companyType +
        '&document=' +
        document +
        '&documentType=' +
        documentType +
        '&fullName=' +
        fullName +
        '&address=' +
        address +
        '&mobile=' +
        mobile +
        '&email=' +
        email +
        '&reference=' +
        reference +
        '&description=' +
        description +
        '&amount=' +
        amount +
        '&amountWithTax=' +
        amountWithTax +
        '&amountWithoutTax=' +
        amountWithoutTax +
        '&tax=' +
        tax +
        '&gateway=' +
        gateway
    );
  }
}
