import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
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
    MascotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
