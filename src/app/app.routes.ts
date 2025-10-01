import { Routes } from '@angular/router';
import { LandingPageComponent } from './views/landing/landing-page/landing-page.component';
import { LoginComponent } from './views/auth/login/login.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CompaniesComponent } from './views/companies/companies.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'companies', component: CompaniesComponent },
    { path: 'login', component: LoginComponent,
        //  canActivate: [AuthGuard], data: { permission: 'login' }
         },
    { path: 'register', component: SignupComponent, canActivate: [AuthGuard], data: { permission: 'register' } }
];
