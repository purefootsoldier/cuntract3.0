import { Routes } from '@angular/router';
import { ListComponent } from './domains/jobs/pages/list/list.component';
import { LandingComponent } from './domains/info/pages/landing/landing.component';
import { AboutComponent } from './domains/info/pages/about/about.component';

import { LoginComponent } from './domains/auth/pages/login/login.component';
import { SignupComponent } from './domains/auth/pages/signup/signup.component';

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
    }
];
