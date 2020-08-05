import { QuizService } from './../Service/quiz.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  
    resultsCat = [];
    results = [];
    userId;
    cat1_score;
    scoreBolean;
    totalScore;
    status;
  
    constructor(
      public quizService: QuizService,
      private router: Router
      ) {
      this.userId = this.quizService.UserInfor();
      this.resultsCat =  this.quizService.getCatRes(this.userId);
      // console.log(this.userId);
      // console.log(this.resultsCat);
  
      this.clearArray(this.results);
      this.quizService.getResults(this.userId).then(data => {
        this.totalScore = 0;
               
        for (let key in data) {
          // console.log(data[key]);
          // console.log(key);
          // console.log(data);
          // console.log(data[key]);

           for (let key2 in data[key]){
            // console.log(data[key][key2]);
           
               this.totalScore = this.totalScore +  data[key][key2];
              //  console.log(this.totalScore);

            if(key=="cat_001"){
               this.cat1_score = data[key][key2];
               
            }

          }
        } 

        if (this.cat1_score < 100){

           this.scoreBolean = true; 
        }
     
        if( this.totalScore <= 125){
          this.status = "Inadequate";
        }
        else if( this.totalScore >= 126 && this.totalScore <= 250 ){
          this.status = "Basic";
        }
        
        else if( this.totalScore >= 251 && this.totalScore <= 375 ){
          this.status = "Intermediate ( consolidation)";
        }

        else if( this.totalScore >= 376 && this.totalScore <= 500 ){
          this.status = "Advanced";
        }
        console.log(this.totalScore);
        
      });
  
  
      // login guard
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
        } else {
          // No user is signed in.
          this.router.navigate(['/login']);
        }
      });
     }
  
     clearArray(array) {
      for (let i = 0; i < array.length; i++) {
        array.splice(i);
    }
   }
  
    ngOnInit() {
    }
  }