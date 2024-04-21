import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path:"home", component: HomeComponent },
  { path:"", component: LoginComponent},
  { path:"register", component: RegisterComponent},
  { path:"about", component: AboutComponent },
  { path: "contact", component: ContactComponent}
];
