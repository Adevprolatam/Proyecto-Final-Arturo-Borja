import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*Servicios*/

/*Rutas*/
import{HttpClientModule} from '@angular/common/http'
import{FormsModule} from'@angular/forms'
import {APP_ROUTING} from './app.routes'

/*Componentes*/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { InicioComponent } from './components/share/cards/inicio/inicio.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelAdminComponent } from './components/admin/panel-admin/panel-admin.component';
import { BarraComponent } from './components/admin/Shared/barra/barra.component';
import { ServiciosComponent } from './components/share/servicios/servicios.component';
import { MoreinfoComponent } from './components/share/moreinfo/moreinfo.component';
import { BlogComponent } from './components/share/blog/blog.component';
import { LeftslidebarComponent } from './components/admin/Shared/leftslidebar/leftslidebar.component';
import { PagenotfoundComponent } from './components/404/pagenotfound/pagenotfound.component';
import { CronogramaComponent } from './components/share/cronograma/cronograma.component';
import { ContactanosComponent } from './components/share/contactanos/contactanos.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CreatorsComponent } from './components/creators/creators.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    PanelAdminComponent,
    BarraComponent,
    ServiciosComponent,
    MoreinfoComponent,
    BlogComponent,
    LeftslidebarComponent,
    PagenotfoundComponent,
    CronogramaComponent,
    ContactanosComponent,
    LandingpageComponent,
    CreatorsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
