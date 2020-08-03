import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Quizcat4Page } from './quizcat4.page';

const routes: Routes = [
  {
    path: '',
    component: Quizcat4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Quizcat4Page]
})
export class Quizcat4PageModule {}
