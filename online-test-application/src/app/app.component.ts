import { Component } from '@angular/core';
import { QuestionModel } from './models/question.model';
import questions from './_files/quiz.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-test-application';

  public myQuestions: QuestionModel[] = questions;
  public isQuestionOne: boolean = false;
  public isQuestionTwo: boolean = false;
  public isQuestionThree: boolean = false;
  public isQuestionFour: boolean = false;
  public isQuestionFive: boolean = false;
  public isQuestionSix: boolean = false;
  public isQuestionSeven: boolean = false;
  public isQuestionEight: boolean = false;
  public isQuestionNine: boolean = false;
  public isQuestionTen: boolean = false;


  public allAnswered: boolean = false;
  public submitted: boolean = false;

  public questionOneAnswer: string = '';
  public questionTwoAnswer: string = '';
  public questionThreeAnswer: string = '';
  public questionFourAnswer: string = '';
  public questionFiveAnswer: string = '';
  public questionSixAnswer: string = '';
  public questionSevenAnswer: string = '';
  public questionEightAnswer: string = '';
  public questionNineAnswer: string = '';
  public questionTenAnswer: string = '';

  public passMarkPercentage: number = 70;
  public marksCount: number = 0;
  public isTestPass: boolean = false;
  public testResult: string = '';

  onSubmit() {
    this.submitted = true;
    var questionLength = this.myQuestions.length;
    console.log("Test submitted", this.myQuestions);

    for (var i = 0; i < questionLength; i++) {
      if (this.myQuestions[i].answer == this.myQuestions[i].selectedOption) {
        this.marksCount++;
      }
    }

    var percentage = (this.marksCount / this.myQuestions.length) * 100;

    if (percentage >= this.passMarkPercentage) {
      this.isTestPass = true;
    }

    this.testResult = this.marksCount + "/" + questionLength;
  }

  onBack() {
    this.submitted = false;
  }

  onItemChange(value) {
    console.log(" Value is : ", value);
    var splitValueArray = value.split('_');
    var questionPart = splitValueArray[0];
    var optionPart = splitValueArray[1];

    if (questionPart == "1") {
      this.questionOneAnswer = optionPart;
      this.isQuestionOne = true;
      this.myQuestions[0].selectedOption = optionPart;
    } else if (questionPart == "2") {
      this.questionTwoAnswer = optionPart;
      this.isQuestionTwo = true;
      this.myQuestions[1].selectedOption = optionPart;
    } else if (questionPart == "3") {
      this.questionThreeAnswer = optionPart;
      this.isQuestionThree = true;
      this.myQuestions[2].selectedOption = optionPart;
    } else if (questionPart == "4") {
      this.questionFourAnswer = optionPart;
      this.isQuestionFour = true;
      this.myQuestions[3].selectedOption = optionPart;
    } else if (questionPart == "5") {
      this.questionFiveAnswer = optionPart;
      this.isQuestionFive = true;
      this.myQuestions[4].selectedOption = optionPart;
    } else if (questionPart == "6") {
      this.questionSixAnswer = optionPart;
      this.isQuestionSix = true;
      this.myQuestions[5].selectedOption = optionPart;
    } else if (questionPart == "7") {
      this.questionSevenAnswer = optionPart;
      this.isQuestionSeven = true;
      this.myQuestions[6].selectedOption = optionPart;
    } else if (questionPart == "8") {
      this.questionEightAnswer = optionPart;
      this.isQuestionEight = true;
      this.myQuestions[7].selectedOption = optionPart;
    } else if (questionPart == "9") {
      this.questionNineAnswer = optionPart;
      this.isQuestionNine = true;
      this.myQuestions[8].selectedOption = optionPart;
    } else if (questionPart == "10") {
      this.questionTenAnswer = optionPart;
      this.isQuestionTen = true;
      this.myQuestions[9].selectedOption = optionPart;
    }

    if (this.isQuestionOne && this.isQuestionTwo && this.isQuestionThree && this.isQuestionFour && 
      this.isQuestionFive && this.isQuestionSix && this.isQuestionSeven && this.isQuestionEight && 
      this.isQuestionNine && this.isQuestionTen) {
      this.allAnswered = true;
    }
  }
}


