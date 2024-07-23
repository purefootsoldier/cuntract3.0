import { Routes } from '@angular/router';
import { ListComponent } from './domains/jobs/pages/list/list.component';
import { LandingComponent } from './domains/info/pages/landing/landing.component';
import { AboutComponent } from './domains/info/pages/about/about.component';

import { LoginComponent } from './domains/auth/pages/login/login.component';
import { SignupComponent } from './domains/auth/pages/signup/signup.component';
import { BusinessSignupComponent } from './domains/auth/pages/signup/business-signup/business-signup.component';
import { TalentSignupComponent } from './domains/auth/pages/signup/talent-signup/talent-signup.component';
import { OfertaComponent } from './domains/business/components/ofertas/oferta/oferta.component';
import { CrearOfertaComponent } from './domains/business/components/crear_oferta/crear-oferta/crear-oferta.component';

export const routes: Routes = [
    {
        path:'',
        component: LandingComponent
    },
    {
        path:'list',
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
          path: 'crear', // child route path
          component: CrearOfertaComponent, // child route component that the router renders
        },
      ],
    },
];
