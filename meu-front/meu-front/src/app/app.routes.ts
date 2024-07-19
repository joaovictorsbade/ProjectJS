import { Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';


export const routes: Routes = [
    {path: 'register', component: UserFormComponent},
    {path: 'users', component: UserListComponent},
    {path: '', redirectTo: '/register', pathMatch: 'full'}
];


