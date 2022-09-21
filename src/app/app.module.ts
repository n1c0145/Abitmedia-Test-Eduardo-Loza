import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';

//Components
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentsIndexComponent } from './components/payments-index/payments-index.component';
import { PaymentsCreatePaymentRequestComponent } from './components/payments-create-payment-request/payments-create-payment-request.component';
import { PaymentsStatusTransactionComponent } from './components/payments-status-transaction/payments-status-transaction.component';
import { PaymentsReverseComponent } from './components/payments-reverse/payments-reverse.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentsIndexComponent,
    PaymentsCreatePaymentRequestComponent,
    PaymentsStatusTransactionComponent,
    PaymentsReverseComponent,
    InicioComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
