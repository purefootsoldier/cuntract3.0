import { Routes } from '@angular/router';
import { ListComponent } from './domains/jobs/pages/list/list.component';
import { LandingComponent } from './domains/info/pages/landing/landing.component';
import { AboutComponent } from './domains/info/pages/about/about.component';

import { LoginComponent } from './domains/auth/pages/login/login.component';
import { SignupComponent } from './domains/auth/pages/signup/signup.component';
import { BusinessSignupComponent } from './domains/auth/pages/signup/business-signup/business-signup.component';
import { TalentSignupComponent } from './domains/auth/pages/signup/talent-signup/talent-signup.component';
import { CrearOfertaComponent } from './domains/business/components/crear_oferta/crear-oferta/crear-oferta.component';
import { AdminPanelComponent } from './domains/business/pages/admin/admin-panel/admin-panel.component';
import { EditarOfertaComponent } from './domains/business/pages/admin/editar-oferta/editar-oferta.component';
import { DashboardComponent } from './domains/talentos/pages/dashboard/dashboard.component';
import { OfertaDetalleComponent } from './domains/talentos/pages/oferta-detalle/oferta-detalle.component';
import { ReviewComponent } from './domains/talentos/components/review/review.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'businessSignup',
    component: BusinessSignupComponent
  },
  {
    path: 'talentSignup',
    component: TalentSignupComponent
  },
  {
    path: 'business',
    children: [
      {
        path: 'admin-panel', // child route path
        component: AdminPanelComponent, // child route component that the router renders
      },
      {
        path: 'negocio/oferta/:id', // child route path
        component: EditarOfertaComponent, // child route component that the router renders
      },
    ],
  },
  {
    path: 'talent',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'talento/ofertaDetalle/:id',
        component: OfertaDetalleComponent,
      },
      {
        path: 'talento/review/:id',
        component: ReviewComponent,
      },
    ],
  },
];
