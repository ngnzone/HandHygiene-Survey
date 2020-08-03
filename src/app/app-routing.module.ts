import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'category', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'quiz', loadChildren: './quiz/quiz.module#QuizPageModule' },
  // { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'quizcat2', loadChildren: './quizcat2/quizcat2.module#Quizcat2PageModule' },
  { path: 'quizcat3', loadChildren: './quizcat3/quizcat3.module#Quizcat3PageModule' },
  { path: 'quizcat4', loadChildren: './quizcat4/quizcat4.module#Quizcat4PageModule' },
  { path: 'quizcat5', loadChildren: './quizcat5/quizcat5.module#Quizcat5PageModule' },
  { path: 'extraquiz', loadChildren: './extraquiz/extraquiz.module#ExtraquizPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
