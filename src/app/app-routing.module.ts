import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RecordatoriosComponent } from './components/recordatorios/recordatorios.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'testimonios', component: TestimoniosComponent},
  {path: 'recordatorios', component: RecordatoriosComponent, canActivate: [AuthGuard]},
  {path: 'mismascotas', component: MascotasComponent, canActivate: [AuthGuard]},
  {path: 'iniciosesion', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
