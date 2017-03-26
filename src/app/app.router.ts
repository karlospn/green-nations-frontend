import { Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {CountryMaintComponent} from './country-maint/country-maint.component';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {AuthenticatedUserComponent} from './authenticated-user/authenticated-user.component';
import {SignInComponent} from '../fw/users/sign-in/sign-in.component';
import {RegisterUserComponent} from '../fw/users/register-user/register-user.component';
import {AuthGuardService} from './services/auth-guard.service';


export const appRoutes : Routes = [
    {path: 'signin', component: SignInComponent},
    {path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuardService],
        children : [
            { path: '', canActivateChild: [AuthGuardService],
                children: [
                {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
                {path: 'country-list/:count', component: CountryListComponent},
                {path: 'country-detail/:id/:operation', component: CountryDetailComponent},
                {path: 'country-maint', component: CountryMaintComponent},
                {path: 'dashboard', component: DashboardComponent},
                {path: 'settings', component: SettingsComponent},
            ]}
        ]
    },
    {path: 'register', component: RegisterUserComponent},
    {path: '', component: SignInComponent},
    {path: '**', component: SignInComponent},
    
];

