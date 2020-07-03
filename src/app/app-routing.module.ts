// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {  path: '', redirectTo: 'landing',  pathMatch: 'full'   },
  {  path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule'  },
  {  path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'   },
  {  path: 'home',  loadChildren: './pages/home/home.module#HomePageModule' },
 // {  path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule'   },
  {  path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule'  },
  {  path: 'edit',   loadChildren: './pages/edit/edit.module#EditPageModule'  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
 // {
  /*
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }, */
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  // { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }