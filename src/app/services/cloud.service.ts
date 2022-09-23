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

  paymentCreate(accesToken:any,formData:any){
return this.http.post(this.url+'create-payment-request?access-token='+accesToken,formData)
  }



}
