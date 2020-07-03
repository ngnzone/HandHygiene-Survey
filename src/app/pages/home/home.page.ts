import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  qsForm: FormGroup;
  singleChoice: any[] = [
    {
      nbr: '1.1',
      question: 'How easily available is alcohol-based handrub in your health-care facility? Please Choose one answer?',
      choice1: 'Available but efficacy and tolerability have not been proven',
      choice2: 'Available only in some wards or in discontinuous supply (with efficacy and toleberability proven)',
      choice3: 'Available facility-wide with continuous supply ( with efficacy and tolerability proven)',
      choice4: 'Available facility-wide with continuous supply and at the point of care in the majority of wards (with efficacy and tolerability proven)',
      choice5: 'Available facility-wide with continuous supply at each point of care (with efficacy and telerabilty proven)'
    },

    {
      nbr: '1.2',
      question: 'What is the sink:bed ratio?',
      choice1: 'Less than 1:10',
      choice2: 'At least 1:10 most wards',
      choice3: 'At least 1:10 facility-wide and 1 to 1 in isolation rooms and in the intensive care units',
    },
    
    {
      nbr: '1.3',
      question: 'Is there a continuous supply of clean, running water?',
      choice1: 'NO',
      choice2: 'YES',
    },

    {
      nbr: '1.4',
      question: 'Is soap available at each sink?',
      choice1: 'NO',
      choice2: 'YES',
    },

    {
      nbr: '1.5',
      question: 'Are single-use towels available at each sink?',
      choice1: 'NO',
      choice2: 'YES',
    },

    {
      nbr: '1.6',
      question: 'Is there dedicated available budget for the continuous procurement of hand hygiene products eg alcohol based handrubs?',
      choice1: 'NO',
      choice2: 'YES',
    },

    {
      nbr: '1.7',
      question: 'Is there dedicated available budget for the continuous procurement of hand hygiene products eg alcohol based handrubs?',
      choice1: 'NO',
      choice2: 'YES',
    },

    
  ];


  multiChoice: any[] = [
    {
      nbr: '4',
      question: 'Choose one or more of your frontend skills!',
      choice1: 'Angular',
      choice2: 'React',
      choice3: 'Vue',
      choice4: 'Ember',
      choice: ''
    },
    {
      nbr: '5',
      question: 'Choose one or more of your backend skills!',
      choice1: 'Spring',
      choice2: 'Django',
      choice3: 'Laravel',
      choice4: 'Ruby on Rails',
      choice: ''
    }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.qsForm = this.formBuilder.group({
      quests: this.formBuilder.array([
        this.initQuests()
      ]),
      quests2: this.formBuilder.array([
        this.initQuests()
      ])
    });
  }

  ngOnInit() {
    this.qsForm = this.formBuilder.group({
      quests: this.setQuest(this.singleChoice),
      quests2: this.setQuest(this.multiChoice)
    });
  }

  initQuests() {
    return this.formBuilder.group({
      nbr: '',
      question: '',
      choice1: '',
      choice2: '',
      choice3: '',
      choice4: '',
      choice: '',
    });
  }

  setQuest(quests: any) {
    const arr = new FormArray([]);
    quests.forEach((q: any) => {
      arr.push(this.formBuilder.group({
        nbr: q.nbr,
        question: q.question,
        nchoice1br: q.choice1,
        choice1: q.choice1,
        choice2: q.choice2,
        choice3: q.choice3,
        choice4: q.choice4,
        choice: ''
      }));
    });
    return arr;
  }

  selectChecked(i: any, value: any) {
    const formArray = this.qsForm.controls.quests2 as FormArray;
    const formGroup = formArray.at(i) as FormGroup;
    const choice = formGroup.controls.choice;
    if (choice.value.search(value) === -1) {
      if (choice.value !== '') {
        choice.setValue(choice.value + ',' + value);
      } else {
        choice.setValue(value);
      }
    } else {
      const splitted = choice.value.split(',');
      const idx = splitted.indexOf(value, 0);
      splitted.splice(idx, 1);
      choice.setValue(splitted.toString());
    }
  }

  onSubmit() {
    const submitData: any[] = [];
    this.qsForm.value.quests.forEach((qu: any) => {
      submitData.push({
        nbr: qu.nbr,
        question: qu.question,
        choice1: qu.choice1,
        choice2: qu.choice2,
        choice3: qu.choice3,
        choice4: qu.choice4,
        answer: qu.choice
      });
    });
    this.qsForm.value.quests2.forEach((qu2: any) => {
      submitData.push({
        nbr: qu2.nbr,
        question: qu2.question,
        choice1: qu2.choice1,
        choice2: qu2.choice2,
        choice3: qu2.choice3,
        choice4: qu2.choice4,
        answer: qu2.choice
      });
    });
    this.router.navigate(['/details/' + JSON.stringify(submitData)]);
  }

}
