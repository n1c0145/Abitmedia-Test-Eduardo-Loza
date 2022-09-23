import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentsCreatePaymentRequestComponent } from './components/payments-create-payment-request/payments-create-payment-request.component';
import { PaymentsIndexComponent } from './components/payments-index/payments-index.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectGuard } from './guard/guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ProtectGuard],
  },
  {
    path: 'payments-index',
    component: PaymentsIndexComponent,
    canActivate: [ProtectGuard],
  },

  {
    path: 'payments-create-payment-request',
    component: PaymentsCreatePaymentRequestComponent,
    canActivate: [ProtectGuard],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
