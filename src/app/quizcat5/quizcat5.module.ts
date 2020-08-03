import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Quizcat5Page } from './quizcat5.page';

const routes: Routes = [
  {
    path: '',
    component: Quizcat5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Quizcat5Page]
})
export class Quizcat5PageModule {}
