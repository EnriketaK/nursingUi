import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormSummary, FormUi, FormSummaryDto, SuggestionType } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;
  
  @Input() currentForm: FormUi = {
    id: 0,
    liveAloneFloor: '',
    liveAloneNo: false,
    liveAloneYes: false,
    liveAloneLift: false,
    patientFname: '',
    patientLname: '',
    weight: '',
    height: '',
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

  public first_suggestion = '';
  public second_suggestion = '';
  public third_suggestion = '';
  public isDisplayed = false;
  public suggestionRes!: SuggestionType;

  message = '';
  searchValue = '';
  summaries?: FormSummary[];

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
      this.getSummaries(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.getForm(id)
      .subscribe({
        next: (data) => {
          this.currentForm = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  getSummaries(fk: string): void {
    this.tutorialService.getSummaries(fk)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.summaries = data;
        },
        error: (e) => console.error(e)
      });
  }


  controlSummaries(value: string): void {
    console.log("value")
    console.log(value)
    const myList = document.getElementById("myList");
      const listItems = myList!.querySelectorAll("li");
  
      listItems.forEach(function(item) {
        const listItem = item as HTMLLIElement;
        const text = listItem.textContent?.toLowerCase() || "";
        if (text.includes(value)) {
          listItem.style.display = "block";
        } else {
          listItem.style.display = "none";
        }
      });
  }


  updateForm(): void {
    this.tutorialService.updateForm(this.currentForm.id, this.currentForm)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.saveSummary(this.currentForm.id!);
        },
        error: (e) => console.error(e)
      });
  }

  saveSummary(formId: number): void {
    this.message = '';
    var summaryText = <HTMLTextAreaElement> document.getElementById("summary_text");
    if (summaryText.value && summaryText.value.length > 0) {
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
            var newSummary: FormSummary = new FormSummary();
            newSummary.content = summaryObj.content;
            this.summaries?.push(newSummary);

            summaryText.value = '';
            this.message = res.message ? res.message : 'This form was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    } else {
      this.message ='This form was updated successfully!';
    }
  }


  getSuggestions(): void {
    const data = {
      patientFname: this.currentForm.patientFname,
      patientLname: this.currentForm.patientLname,
      weight: this.currentForm.weight,
      height: this.currentForm.height,
      liveAloneNo: this.currentForm.liveAloneNo,
      liveAloneYes: this.currentForm.liveAloneYes,
      liveAloneLift: this.currentForm.liveAloneLift,
      liveAloneFloor: this.currentForm.liveAloneFloor,
      obliationsNo: this.currentForm.obliationsNo,
      obliationsYes: this.currentForm.obliationsYes,
      relativeSurname1: this.currentForm.relativeSurname1,
      relativeFname1: this.currentForm.relativeFname1,
      relativePhone1: this.currentForm.relativePhone1,
      relativeRel1: this.currentForm.relativeRel1,
      relativeSurname2: this.currentForm.relativeSurname2,
      relativeFname2: this.currentForm.relativeFname2,
      relativePhone2: this.currentForm.relativePhone2,
      relativeRel2: this.currentForm.relativeRel2,
      relativeSurname3: this.currentForm.relativeSurname3,
      relativeFname3: this.currentForm.relativeFname3,
      relativePhone3: this.currentForm.relativePhone3,
      relativeRel3: this.currentForm.relativeRel3,
      careNo: this.currentForm.careNo,
      careYes: this.currentForm.careYes,
      careDegree1: this.currentForm.careDegree1,
      careDegree2: this.currentForm.careDegree2,
      careDegree3: this.currentForm.careDegree3,
      careDegree4: this.currentForm.careDegree4,
      careDegree5: this.currentForm.careDegree5,
      hospitalizedNo: this.currentForm.hospitalizedNo,
      hospitalizedYes: this.currentForm.hospitalizedYes,
      hospAbroadPlace: this.currentForm.hospAbroadPlace,
      hospAbroadTime: this.currentForm.hospAbroadTime,
      commNoImpairment: this.currentForm.commNoImpairment,
      commForeignLang: this.currentForm.commForeignLang,
      commForeignLangYes: this.currentForm.commForeignLangYes,
      commForeignLangNo: this.currentForm.commForeignLangNo,
      commSignLang: this.currentForm.commSignLang,
      commDisorder: this.currentForm.commDisorder,
      commTrach: this.currentForm.commTrach,
      visionLeft: this.currentForm.visionLeft,
      visionRight: this.currentForm.visionRight,
      blindnessLeft: this.currentForm.blindnessLeft,
      blindnessRight: this.currentForm.blindnessRight,
      visualAidLeft: this.currentForm.visualAidLeft,
      visualAidRight: this.currentForm.visualAidRight,
      hearingNoImp: this.currentForm.hearingNoImp,
      hearingAidRight: this.currentForm.hearingAidRight,
      hearingAidLeft: this.currentForm.hearingAidLeft,
      hearingHardRight: this.currentForm.hearingHardRight,
      hearingHardLeft: this.currentForm.hearingHardLeft,
      deafnessRight: this.currentForm.deafnessRight,
      deafnessLeft: this.currentForm.deafnessLeft,
      disorNoImp: this.currentForm.disorNoImp,
      disorTime: this.currentForm.disorTime,
      disorPlace: this.currentForm.disorPlace,
      disorPerson: this.currentForm.disorPerson,
      understNoImp: this.currentForm.understNoImp,
      understConfusion: this.currentForm.understConfusion,
      understNerv: this.currentForm.understNerv,
      understAltered: this.currentForm.understAltered,
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
  
}