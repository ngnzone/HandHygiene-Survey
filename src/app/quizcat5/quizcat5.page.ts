import { Component, OnInit } from '@angular/core';
import { QuizService } from './../Service/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-quizcat5',
  templateUrl: './quizcat5.page.html',
  styleUrls: ['./quizcat5.page.scss'],
})
export class Quizcat5Page implements OnInit {

  Category;
    id;
    // test items
    catName;
    categorykey;
  
    Questionz = [];
    Userids;
    ID;
    userId;
    questionSet = [];
    Answerz = [];
    gameArray = [];
    index = 0;
    answerValue= 0;
    cat1_score;
    scoreBolean;
    
   
    // getting user details
    user = firebase.auth().currentUser;
    uid;
    
  
    constructor(
      public quizService: QuizService,
      public router: ActivatedRoute,
      public toastController: ToastController,
      public loadingController: LoadingController
  
      ) {
        this.ID = this.quizService.Return_ID();
        this.Questionz = this.quizService.firebaseQuiz(this.ID);
        this.Userids = this.quizService.UserInfor();



        this.quizService.getResults(this.userId).then(data => {
          
                 
          for (let key in data) {
             
             for (let key2 in data[key]){
              // console.log(data[key][key2]);
             
               //  console.log(this.totalScore);
  
              if(key=="cat_001"){
                 this.cat1_score = data[key][key2];
                 
              }
  
            }
          } 
  
          if (this.cat1_score < 100){
  
             this.scoreBolean = true; 
          }
          console.log(this.scoreBolean);
                 
        });
    
       }
      
  
       ngOnInit() {
        this.loadData();
      }
    
    pushToGameArray(Question, Answer) {
      this.gameArray.push({
        gameQuestions: Question,
        Answer: Answer,
       
      });
      // console.log(this.gameArray);
    }
  
    Score(event, Question) {
      const question: string = Question;
      const Answer: string = event.detail.value;
     
      // console.log(question);
      // console.log(Answer);
  
  
  
  
      // second phase
      if (this.Questionz.length >= 1) {
        // console.log(this.Questionz);
        console.log(question);
        
        for (let i = 0; i < this.Questionz.length; i++) {
          // console.log(i);
          if (this.Questionz[i].Question === Question) {
              for (let n = 0; n < this.Questionz[i].Answer.length; n++) {
              // console.log(this.Questionz[i].value[n]);
             if( this.Questionz[i].Answer[n] === Answer){
                // console.log(this.Questionz[i].Answer[n]);
                // this.answerValue = this.Questionz[i].Answer[n];
                this.answerValue += this.Questionz[i].value[n];
               // console.log(this.answerValue + "" + "Test VALUE OF ANSWERVALUE");
            
  
              }
            }
          }
        }
      }
  

      if (this.user != null) {
        this.uid = this.user.uid;
        console.log(this.uid);
      }
    }
  
    submit() {
     
      this.submitFirebase();
    }
  
    submitFirebase() {
     
      firebase.database().ref().child('Scores/' + this.uid + '/' + '/' + this.ID + '/' ).update({
        usersScore: this.answerValue
        });
      console.log("Done Everything");
    }
  
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Please take the next set of questions on this page',
        duration: 8000,
        position: 'bottom',
        color: 'primary'
      });
      toast.present();
    }
  
    setID(cat) {
      this.quizService.getID(cat);
    }
  
    async loadData() {
      const loader = await this.loadingController.create({
        spinner: 'bubbles',
        message: 'loading questions...'
      });
      await loader.present();
      this.quizService.getcat().then( getcat => {
        this.Category = getcat;
        loader.dismiss();
      });
     
    }

    // this.userId = this.quizService.UserInfor();
      // this.resultsCat =  this.quizService.getCatRes(this.userId);
      // console.log(this.userId);
      // console.log(this.resultsCat);
  
      // this.clearArray(this.results);
      
     
   
    
  
  }
  