import { Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { AboutComponent } from './page/about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './page/login/login.component';
import { FormComponent } from './page/form/form.component';

export const routes: Routes = [
  {path:'login', component:LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  {path : "form", component:FormComponent},
  
  // page not found
  { path: '**', component: NotfoundComponent },
];
