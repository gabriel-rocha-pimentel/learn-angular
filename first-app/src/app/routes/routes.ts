import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DetailsComponent } from '../details/details.component';

const routesConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details'
    }
];

export default routesConfig;