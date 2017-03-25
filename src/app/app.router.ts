import { Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {CountryMaintComponent} from './country-maint/country-maint.component';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {AuthenticatedUserComponent} from './authenticated-user/authenticated-user.component';
import {SignInComponent} from '../fw/users/sign-in/sign-in.component';


export const appRoutes : Routes = [
    {path: 'signin', component: SignInComponent},
    {path: 'authenticated', component: AuthenticatedUserComponent,
        children: [
            {path: 'country-list/:count', component: CountryListComponent},
            {path: 'country-detail/:country', component: CountryDetailComponent},
            {path: 'country-maint', component: CountryMaintComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'settings', component: SettingsComponent},
        ]
    },
    {path: '', component: SignInComponent},
    {path: '**', component: SignInComponent},
    
];

