import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepotComponent } from './depot/depot.component';
import { DetailComponent } from './detail/detail.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AuthGuard } from './_helpers';
import { AccueilComponent } from './accueil/accueil.component';
const routes: Routes = [
  { path: '', component: AccueilComponent },
    { path: 'offre', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'annonce', component: DepotComponent, canActivate: [AuthGuard] },
  { path: 'rechercher', component: RechercheComponent, canActivate: [AuthGuard]},
  { path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
