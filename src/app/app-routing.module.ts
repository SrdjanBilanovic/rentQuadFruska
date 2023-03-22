import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UsloviZaIznajmljivanjeComponent } from './uslovi-za-iznajmljivanje/uslovi-za-iznajmljivanje.component';
import { OnamaComponent } from './onama/onama.component';


const routes: Routes = [
  {path:"home",component:HomePageComponent},
  {path:"kontakt",component:FooterComponent},
  {path:"rezervacije",component:ReservationComponent},
  {path:"uslovi",component:UsloviZaIznajmljivanjeComponent},
  {path:"Onama",component:OnamaComponent},
  {path:"",component:HomePageComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
