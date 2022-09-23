import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

//Components
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentsIndexComponent } from './components/payments-index/payments-index.component';
import { PaymentsCreatePaymentRequestComponent } from './components/payments-create-payment-request/payments-create-payment-request.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentsIndexComponent,
    PaymentsCreatePaymentRequestComponent,
    NavComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
