import { InicioComponent } from './components/inicio/inicio.component';
import { PaymentsReverseComponent } from './components/payments-reverse/payments-reverse.component';
import { PaymentsStatusTransactionComponent } from './components/payments-status-transaction/payments-status-transaction.component';
import { PaymentsCreatePaymentRequestComponent } from './components/payments-create-payment-request/payments-create-payment-request.component';
import { PaymentsIndexComponent } from './components/payments-index/payments-index.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectGuard } from './guard/guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [ProtectGuard] },
  { path: 'payments-index', component: PaymentsIndexComponent },

  {
    path: 'payments-create-payment-request',
    component: PaymentsCreatePaymentRequestComponent,
    canActivate: [ProtectGuard],
  },
  {
    path: 'payments-status-transaction',
    component: PaymentsStatusTransactionComponent,
    canActivate: [ProtectGuard],
  },
  {
    path: 'payments-reverse',
    component: PaymentsReverseComponent,
    canActivate: [ProtectGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
