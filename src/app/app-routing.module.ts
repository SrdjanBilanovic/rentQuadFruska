import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'rezervacije',component:ReservationComponent},
  {path:'kontakt', component:FooterComponent},
  {path:"", redirectTo:'/rezervacije',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
