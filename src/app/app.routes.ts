import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelAdminComponent } from './components/admin/panel-admin/panel-admin.component';
import { ServiciosComponent } from './components/share/servicios/servicios.component';
import { MoreinfoComponent } from './components/share/moreinfo/moreinfo.component';
import { BlogComponent } from './components/share/blog/blog.component';
import { PagenotfoundComponent } from './components/404/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactanosComponent } from './components/share/contactanos/contactanos.component';
import { CronogramaComponent } from './components/share/cronograma/cronograma.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CreatorsComponent } from './components/creators/creators.component';
const app_routes:Routes=[
    {path: 'home', component: HomeComponent },
    {path: 'login', component: LoginComponent },
    {path: 'servicios', component: ServiciosComponent },
    {path: 'info', component: MoreinfoComponent },
    {path: 'blog', component: BlogComponent },
    {path: 'admin' , component: PanelAdminComponent , canActivate: [ AuthGuard ]  },
    {path: 'contactanos', component: ContactanosComponent },
    {path: 'cronograma', component:  CronogramaComponent},
    {path: 'work', component:  LandingpageComponent},
    {path: 'creators', component: CreatorsComponent},
    {path: '', redirectTo: '/home' , pathMatch: 'full'},
    {path: '**', component:PagenotfoundComponent}
];
export const APP_ROUTING=RouterModule.forRoot(app_routes, {useHash:true});