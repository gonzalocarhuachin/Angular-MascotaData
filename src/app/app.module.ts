import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { CommonModule } from "@angular/common";
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxPrintModule} from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { MainBannerComponent } from './inicio/main-banner/main-banner.component';
import { HomeComponent } from './inicio/home/home.component';
import { MismascotasComponent } from './inicio/mismascotas/mismascotas.component';
import { MensajeComponent } from './inicio/mensaje/mensaje.component';
import { UsuariosComponent } from './inicio/usuarios/usuarios.component';
import { VeterinariosComponent } from './components/veterinarios/veterinarios.component';
import { RecordatoriosComponent } from './components/recordatorios/recordatorios.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    NosotrosComponent,
    TestimoniosComponent,
    MainBannerComponent,
    HomeComponent,
    MismascotasComponent,
    MensajeComponent,
    UsuariosComponent,
    VeterinariosComponent,
    RecordatoriosComponent,
    MascotasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    OrderModule,
    CommonModule,
    NgxPaginationModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
