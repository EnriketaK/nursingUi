import { Component, OnInit } from '@angular/core';
import { FormSummaryDto, FormUi, Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

interface SuggestionType {
  summary1: string;
  summary2: string;
  summary3: string;
}

// function isSuggestionType(o: any): o is SuggestionType {
//   return "summary1" in o && "summary2" && "summary3" in o
// }

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  public first_suggestion = '';
  public second_suggestion = '';
  public third_suggestion = '';
  public isDisplayed = false;
  public suggestionRes!: SuggestionType;

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };

  formUi: FormUi = {
    id: 0,
    liveAloneNo: false,
    liveAloneYes: false,
    liveAloneLift: false,
    liveAloneFloor: '',
    obliationsNo: false,
    obliationsYes: false,
    relativeSurname1: '',
    relativeFname1: '',
    relativePhone1: '',
    relativeRel1: '',
    relativeSurname2: '',
    relativeFname2: '',
    relativePhone2: '',
    relativeRel2: '',
    relativeSurname3: '',
    relativeFname3: '',
    relativePhone3: '',
    relativeRel3: '',
    careNo: false,
    careYes: false,
    careDegree1: false,
    careDegree2: false,
    careDegree3: false,
    careDegree4: false,
    careDegree5: false,
    hospitalizedNo: false,
    hospitalizedYes: false,
    hospAbroadPlace: '',
    hospAbroadTime: '',
    commNoImpairment: false,
    commForeignLang: false,
    commForeignLangYes: false,
    commForeignLangNo: false,
    commSignLang: false,
    commDisorder: false,
    commTrach: false,
    visionLeft: false,
    visionRight: false,
    blindnessLeft: false,
    blindnessRight: false,
    visualAidLeft: false,
    visualAidRight: false,
    hearingNoImp: false,
    hearingAidRight: false,
    hearingAidLeft: false,
    hearingHardRight: false,
    hearingHardLeft: false,
    deafnessRight: false,
    deafnessLeft: false,
    disorNoImp: false,
    disorTime: false,
    disorPlace: false,
    disorPerson: false,
    understNoImp: false,
    understConfusion: false,
    understNerv: false,
    understAltered: false,
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  getSuggestions(): void {
    const data = {
      liveAloneNo: this.formUi.liveAloneNo,
      liveAloneYes: this.formUi.liveAloneYes,
      liveAloneLift: this.formUi.liveAloneLift,
      liveAloneFloor: this.formUi.liveAloneFloor,
      obliationsNo: this.formUi.obliationsNo,
      obliationsYes: this.formUi.obliationsYes,
      relativeSurname1: this.formUi.relativeSurname1,
      relativeFname1: this.formUi.relativeFname1,
      relativePhone1: this.formUi.relativePhone1,
      relativeRel1: this.formUi.relativeRel1,
      relativeSurname2: this.formUi.relativeSurname2,
      relativeFname2: this.formUi.relativeFname2,
      relativePhone2: this.formUi.relativePhone2,
      relativeRel2: this.formUi.relativeRel2,
      relativeSurname3: this.formUi.relativeSurname3,
      relativeFname3: this.formUi.relativeFname3,
      relativePhone3: this.formUi.relativePhone3,
      relativeRel3: this.formUi.relativeRel3,
      careNo: this.formUi.careNo,
      careYes: this.formUi.careYes,
      careDegree1: this.formUi.careDegree1,
      careDegree2: this.formUi.careDegree2,
      careDegree3: this.formUi.careDegree3,
      careDegree4: this.formUi.careDegree4,
      careDegree5: this.formUi.careDegree5,
      hospitalizedNo: this.formUi.hospitalizedNo,
      hospitalizedYes: this.formUi.hospitalizedYes,
      hospAbroadPlace: this.formUi.hospAbroadPlace,
      hospAbroadTime: this.formUi.hospAbroadTime,
      commNoImpairment: this.formUi.commNoImpairment,
      commForeignLang: this.formUi.commForeignLang,
      commForeignLangYes: this.formUi.commForeignLangYes,
      commForeignLangNo: this.formUi.commForeignLangNo,
      commSignLang: this.formUi.commSignLang,
      commDisorder: this.formUi.commDisorder,
      commTrach: this.formUi.commTrach,
      visionLeft: this.formUi.visionLeft,
      visionRight: this.formUi.visionRight,
      blindnessLeft: this.formUi.blindnessLeft,
      blindnessRight: this.formUi.blindnessRight,
      visualAidLeft: this.formUi.visualAidLeft,
      visualAidRight: this.formUi.visualAidRight,
      hearingNoImp: this.formUi.hearingNoImp,
      hearingAidRight: this.formUi.hearingAidRight,
      hearingAidLeft: this.formUi.hearingAidLeft,
      hearingHardRight: this.formUi.hearingHardRight,
      hearingHardLeft: this.formUi.hearingHardLeft,
      deafnessRight: this.formUi.deafnessRight,
      deafnessLeft: this.formUi.deafnessLeft,
      disorNoImp: this.formUi.disorNoImp,
      disorTime: this.formUi.disorTime,
      disorPlace: this.formUi.disorPlace,
      disorPerson: this.formUi.disorPerson,
      understNoImp: this.formUi.understNoImp,
      understConfusion: this.formUi.understConfusion,
      understNerv: this.formUi.understNerv,
      understAltered: this.formUi.understAltered,
    };
    
    console.log("data")
    console.log(data)

    this.tutorialService.get_suggestion(data)
      .subscribe({
        next: (res: any) => {
          console.log("res");
          console.log(res);
          this.suggestionRes = JSON.parse(res);
          console.log(this.suggestionRes?.summary1);
          console.log(this.suggestionRes?.summary2);
          console.log(this.suggestionRes?.summary3);

          this.isDisplayed = true;
          this.first_suggestion = this.suggestionRes.summary1;
          this.second_suggestion = this.suggestionRes.summary2;
          this.third_suggestion = this.suggestionRes.summary3;
        },
        error: (e) => console.error(e)
      });
  }


  clearSuggestions(): void {
    var firstSuggestionEl = <HTMLInputElement> document.getElementById("first_suggestion");
    var isFirstSuggChecked = firstSuggestionEl.checked;
    var secondSuggestionEl = <HTMLInputElement> document.getElementById("second_suggestion");
    var isSecSuggChecked = secondSuggestionEl.checked;
    var thirdSuggestionEl = <HTMLInputElement> document.getElementById("third_suggestion");
    var isThirdSuggChecked = thirdSuggestionEl.checked;

    var allSummary = '';
    allSummary = isFirstSuggChecked ? this.suggestionRes.summary1 : '';
    allSummary = isSecSuggChecked ? allSummary += this.suggestionRes.summary2 : allSummary;
    allSummary = isThirdSuggChecked ? allSummary += this.suggestionRes.summary3 : allSummary;
    firstSuggestionEl.checked = false;
    secondSuggestionEl.checked = false;
    thirdSuggestionEl.checked = false;

    var summaryText = <HTMLTextAreaElement> document.getElementById("summary_text");
    summaryText.textContent = allSummary;

    this.isDisplayed = false;
  }

  saveForm(): void {
    const data = {
      liveAloneNo: this.formUi.liveAloneNo,
      liveAloneYes: this.formUi.liveAloneYes,
      liveAloneLift: this.formUi.liveAloneLift,
      liveAloneFloor: this.formUi.liveAloneFloor,
      obliationsNo: this.formUi.obliationsNo,
      obliationsYes: this.formUi.obliationsYes,
      relativeSurname1: this.formUi.relativeSurname1,
      relativeFname1: this.formUi.relativeFname1,
      relativePhone1: this.formUi.relativePhone1,
      relativeRel1: this.formUi.relativeRel1,
      relativeSurname2: this.formUi.relativeSurname2,
      relativeFname2: this.formUi.relativeFname2,
      relativePhone2: this.formUi.relativePhone2,
      relativeRel2: this.formUi.relativeRel2,
      relativeSurname3: this.formUi.relativeSurname3,
      relativeFname3: this.formUi.relativeFname3,
      relativePhone3: this.formUi.relativePhone3,
      relativeRel3: this.formUi.relativeRel3,
      careNo: this.formUi.careNo,
      careYes: this.formUi.careYes,
      careDegree1: this.formUi.careDegree1,
      careDegree2: this.formUi.careDegree2,
      careDegree3: this.formUi.careDegree3,
      careDegree4: this.formUi.careDegree4,
      careDegree5: this.formUi.careDegree5,
      hospitalizedNo: this.formUi.hospitalizedNo,
      hospitalizedYes: this.formUi.hospitalizedYes,
      hospAbroadPlace: this.formUi.hospAbroadPlace,
      hospAbroadTime: this.formUi.hospAbroadTime,
      commNoImpairment: this.formUi.commNoImpairment,
      commForeignLang: this.formUi.commForeignLang,
      commForeignLangYes: this.formUi.commForeignLangYes,
      commForeignLangNo: this.formUi.commForeignLangNo,
      commSignLang: this.formUi.commSignLang,
      commDisorder: this.formUi.commDisorder,
      commTrach: this.formUi.commTrach,
      visionLeft: this.formUi.visionLeft,
      visionRight: this.formUi.visionRight,
      blindnessLeft: this.formUi.blindnessLeft,
      blindnessRight: this.formUi.blindnessRight,
      visualAidLeft: this.formUi.visualAidLeft,
      visualAidRight: this.formUi.visualAidRight,
      hearingNoImp: this.formUi.hearingNoImp,
      hearingAidRight: this.formUi.hearingAidRight,
      hearingAidLeft: this.formUi.hearingAidLeft,
      hearingHardRight: this.formUi.hearingHardRight,
      hearingHardLeft: this.formUi.hearingHardLeft,
      deafnessRight: this.formUi.deafnessRight,
      deafnessLeft: this.formUi.deafnessLeft,
      disorNoImp: this.formUi.disorNoImp,
      disorTime: this.formUi.disorTime,
      disorPlace: this.formUi.disorPlace,
      disorPerson: this.formUi.disorPerson,
      understNoImp: this.formUi.understNoImp,
      understConfusion: this.formUi.understConfusion,
      understNerv: this.formUi.understNerv,
      understAltered: this.formUi.understAltered,
    };
    
    console.log("data")
    console.log(data)

    this.tutorialService.save_admission_form(data)
      .subscribe({
        next: (res) => {
          console.log("res");
          console.log(res);
          this.saveSummary(res['id']);
        },
        error: (e) => console.error(e)
      });
  }

  saveSummary(formId: number): void {
    //pass admission form id
    //migrate
    var summaryText = <HTMLTextAreaElement> document.getElementById("summary_text");
    var summaryObj: FormSummaryDto = new FormSummaryDto();
    summaryObj.content = summaryText.value;
    summaryObj.admissionFormFk = formId;
    console.log(" summaryText.value ");
    console.log( summaryText.value);

    
    this.tutorialService.save_summary(summaryObj)
      .subscribe({
        next: (res) => {
          console.log("res");
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}