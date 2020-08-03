import { QuizService } from './../Service/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  Category;
  id;
  // test items
  catName;
  categorykey;

  Questionz = [];
  Userids;
  ID;

  questionSet = [];
  Answerz = [];
  gameArray = [];
  index = 0;
  answerValue= 0;
  
 
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

    //console.log(this.answerValue);
    // if (this.answerValue === Answer) {
    //   this.scoreBoolean = true;
    //   console.log(this.scoreBoolean);
    //   console.log("correct answer");
    // }
    // if (this.answerValue !== Answer) {
    //   this.scoreBoolean = false;
    //   console.log("wrong answer");
    // }

    // 1st phase
    // if (this.gameArray.length === 0) {
    //   this.pushToGameArray(Question, Answer);
    //   // console.log('pushed to array successfully');
    // } else if (this.gameArray.length > 0) {
    //   // console.log('Entered into else clause');
    //   for (let i = 0; i < this.gameArray.length; i++) {
    //     // console.log('Entered into for loop');
    //     if (this.gameArray[i].gameQuestions === question) {
    //       console.log('Question has a match in game array');
    //       this.index = this.gameArray.indexOf(this.gameArray[i]);
    //       // console.log(this.index);
    //     } else {
    //       // console.log('no match in game array');
    //       this.index = null;
    //     }
    //   }

    //   if (this.index != null) {
    //     console.log(this.index);
    //     this.gameArray[this.index].Answer = Answer;
    //     //this.gameArray[this.index].scoreBoolean = this.scoreBoolean;
    //     console.log(Answer);
    //   } else if (this.index === null) {
    //     this.pushToGameArray(Question, Answer);
    //   }
    // }
    // console.log(this.gameArray);
    // console.log(this.index);

    // ting user infor
    if (this.user != null) {
      this.uid = this.user.uid;
      console.log(this.uid);
    }
  }

  submit() {
   
    this.submitFirebase();
  }

  submitFirebase() {
    // console.log(this.gameArray);
    // let newPostKey = firebase.database().ref().child('Results/' + this.uid + '/').push().key;
    // console.log(newPostKey);
    // for (let i = 0; i < this.gameArray.length; i++) {
    //   firebase.database().ref('Results/' + '/' + this.uid + '/' + this.ID + '/' + newPostKey + '/' + this.gameArray[i].gameQuestions).set({
    //     userAnswer: this.gameArray[i].correctAnswer,
    //     userBooleanScore: this.gameArray[i].scoreBoolean
    //   });
    //   console.log(this.Userids);
    // }
    firebase.database().ref().child('Scores/' + this.uid + '/' + '/' + this.ID + '/' ).update({
      usersScore: this.answerValue
      });
    console.log("Done Everything");
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: ' Please take the next set of questions on this page.',
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
      message: 'loading categories...'
    });
    await loader.present();
    this.quizService.getcat().then( getcat => {
      this.Category = getcat;
      loader.dismiss();
    });
   
  }
   
 
  

}
