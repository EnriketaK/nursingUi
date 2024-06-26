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
  
  @Input() formUi: FormUi = {
    id: 0,
    patientFname: '',
    patientLname: '',
    weight: '',
    height: '',
    medDrug1: '',
    medDosage1: '',
    medMorning1: false,
    medNoon1: false,
    medEvening1: false,
    medNight1: false,
    medDrug2: '',
    medDosage2: '',
    medMorning2: false,
    medNoon2: false,
    medEvening2: false,
    medNight2: false,
    medDrug3: '',
    medDosage3: '',
    medMorning3: false,
    medNoon3: false,
    medEvening3: false,
    medNight3: false,
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
    disabilityNo: false,
    disabilityYes: false,
    disabilityHemiYes: false,
    disabilityHemi: '',
    disabilityAmputYes: false,
    disabilityAmput: '',
    disabilityParaYes: false,
    disabilityPara: '',
    disabilityTetraYes: false,
    disabilityTetra: '',
    disabilityLimbsYes: false,
    disabilityLimbs: '',
    disabilityMisalYes: false,
    disabilityMisal: '',
    disabilityProYes: false,
    disabilityProNo: false,
    sleepNoImp: false,
    sleepDiff: false,
    sleepBreath: false,
    dietWhole: false,
    dietNoSugar: false,
    dietVeg: false,
    dietDiabetic: false,
    ingestOral: false,
    ingestFeed: false,
    ingestParent: false,
    excNoImp: false,
    excIncont: false,
    excIncrease: false,
    excBladder: false,
    bowelNoImp: false,
    bowelIncon: false,
    bowelDiarr: false,
    bowelCons: false,
    bowelPraetor: false,
    bowelLax: false,
    bowelAids: false,
    painNo: false,
    painYes: false,
    painPart1: '',
    painSide1: '',
    painState1: '',
    painRest1: '',
    painExc1: '',
    painFreq1: '',
    painType1: '',
    painPart2: '',
    painSide2: '',
    painState2: '',
    painRest2: '',
    painExc2: '',
    painFreq2: '',
    painType2: '',
    painPart3: '',
    painSide3: '',
    painState3: '',
    painRest3: '',
    painExc3: '',
    painFreq3: '',
    painType3: '',
    substNo: false,
    substYes: false,
    substSmoker: false,
    substSmokerNr: '',
    substFormer: false,
    substAlcohol: false,
    substAlcoholReg: false,
    substAlcoholOcc: false,
    substNarc: false,
    ulcersNo: false,
    ulcersYes: false,
    ulcersWoundNo: false,
    ulcersWoundYes: false,
    skinNoFind: false,
    skinWithFind: false,
    skinDry: false,
    skinMoist: false,
    skinDerm: false,
    skinParch: false,
    skinHema: false,
    careDressSelf: false,
    careDressSupp: false,
    careFoodSelf: false,
    careFoodSupp: false,
    careExcSelf: false,
    careExcSup: false,
    careWalkSelf: false,
    careWalkSupp: false,
    objNo: false,
    objYes: false,
    objCompress: false,
    objDevice: false,
    objOrtho: false,
    objPros: false,
    objOthers: '',
    skinIntact: false,
    skinNotInt: false,
    skinNotAsc: false,
    inletsNo: false,
    inletsYes: false,
    inletsPortYes: false,
    inletsPortNo: false,
    inletsProbesYes: false,
    inletsProbesNo: false,
    inletsUrineYes: false,
    inletsUrineNo: false,
    stomataYes: false,
    stomataNo: false,
    fallNo: false,
    fallYes: false,
    fall1x: false,
    fall2x: false,
    fall3x: false,
    fallMore: false,
    drugsNo: false,
    drugsYes: false,
    diagnoseSync: false,
    diagnoseEpil: false,
    diagnoseHunt: false,
    diagnoseDiab: false,
    diagnoseNo: false,
    allergyNo: false,
    allergyYes: false,
    allergyKnown1: '',
    allergyKnown2: '',
    allergyKnown3: '',
    valuablesYes: false,
    valuablesNo: false,
    valuablesRel: false,
    valuablesWard: false,
    informYes: false,
    informNo: false,
};

  public first_suggestion = '';
  public second_suggestion = '';
  public third_suggestion = '';
  public areSuggestionsAvailable = false;
  public isSuggesting = false;
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
          this.formUi = data;
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


  getSuggestions(): void {
    const data = this.getFormData();
    console.log("data")
    console.log(data)
    if (this.isSuggesting) {
      return;
    }

    this.isSuggesting = true;
    this.tutorialService.get_suggestion(data)
      .subscribe({
        next: (res: any) => {
          console.log("res");
          console.log(res);
          this.suggestionRes = JSON.parse(res);
          console.log(this.suggestionRes?.summary);
          // console.log(this.suggestionRes?.summary2);
          // console.log(this.suggestionRes?.summary3);

          this.areSuggestionsAvailable = true;
          this.isSuggesting = false;
          this.first_suggestion = this.suggestionRes.summary;
          // this.second_suggestion = this.suggestionRes.summary2;
          // this.third_suggestion = this.suggestionRes.summary3;
        },
        error: (e) => {
          console.error(e);
          this.isSuggesting = false;
        }
      });
  }

  clearSuggestions(): void {
    var firstSuggestionEl = <HTMLInputElement> document.getElementById("first_suggestion");
    var isFirstSuggChecked = firstSuggestionEl.checked;
    var secondSuggestionEl = <HTMLInputElement> document.getElementById("second_suggestion");
    var isSecSuggChecked = secondSuggestionEl.checked;
    var thirdSuggestionEl = <HTMLInputElement> document.getElementById("third_suggestion");
    var isThirdSuggChecked = thirdSuggestionEl.checked;

    var summaryText = <HTMLTextAreaElement> document.getElementById("summary_text");
    var allSummary = summaryText.innerHTML;

    allSummary = isFirstSuggChecked ? allSummary += this.suggestionRes.summary : allSummary;
    // allSummary = isSecSuggChecked ? allSummary += this.suggestionRes.summary2 : allSummary;
    // allSummary = isThirdSuggChecked ? allSummary += this.suggestionRes.summary3 : allSummary;
    firstSuggestionEl.checked = false;
    secondSuggestionEl.checked = false;
    thirdSuggestionEl.checked = false;

    summaryText.textContent = allSummary;

    this.areSuggestionsAvailable = false;
  }

  updateForm(): void {
    this.tutorialService.updateForm(this.formUi.id, this.formUi)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.saveSummary(this.formUi.id!);
        },
        error: (e) => console.error(e)
      });
  }

  saveSummary(formId: number): void {
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
          
          this.showToast();
        },
        error: (e) => console.error(e)
      });
    } else {
      this.showToast();
    }
  }

  showToast() {
    const toastElement = document.querySelector('.toast');
    if (toastElement) {
      (toastElement as HTMLElement).classList.add('show');
    }
    this.afterSubitting();
  }

  afterSubitting() {
    setTimeout(() => {
      const toastElement = document.querySelector('.toast');
      if (toastElement) {
        (toastElement as HTMLElement).classList.remove('show');
      }
    }, 3000);
  }


  // saveSummary(formId: number): void {
  //   this.message = '';
  //   var summaryText = <HTMLTextAreaElement> document.getElementById("summary_text");
  //   if (summaryText.value && summaryText.value.length > 0) {
  //     var summaryObj: FormSummaryDto = new FormSummaryDto();
  //     summaryObj.content = summaryText.value;
  //     summaryObj.admissionFormFk = formId;
  //     console.log(" summaryText.value ");
  //     console.log( summaryText.value);
  
      
  //     this.tutorialService.save_summary(summaryObj)
  //       .subscribe({
  //         next: (res) => {
  //           console.log("res");
  //           console.log(res);
  //           var newSummary: FormSummary = new FormSummary();
  //           newSummary.content = summaryObj.content;
  //           this.summaries?.push(newSummary);

  //           summaryText.value = '';
  //           this.message = res.message ? res.message : 'This form was updated successfully!';
  //         },
  //         error: (e) => console.error(e)
  //       });
  //   } else {
  //     this.message ='This form was updated successfully!';
  //   }
  // }

  private getFormData() {
    return {
      patientFname: this.formUi.patientFname,
      patientLname: this.formUi.patientLname,
      weight: this.formUi.weight,
      height: this.formUi.height,
      medDrug1: this.formUi.medDrug1,
      medDosage1: this.formUi.medDosage1,
      medMorning1: this.formUi.medMorning1,
      medNoon1: this.formUi.medNoon1,
      medEvening1: this.formUi.medEvening1,
      medNight1: this.formUi.medNight1,
      medDrug2: this.formUi.medDrug2,
      medDosage2: this.formUi.medDosage2,
      medMorning2: this.formUi.medMorning2,
      medNoon2: this.formUi.medNoon2,
      medEvening2: this.formUi.medEvening2,
      medNight2: this.formUi.medNight2,
      medDrug3: this.formUi.medDrug3,
      medDosage3: this.formUi.medDosage3,
      medMorning3: this.formUi.medMorning3,
      medNoon3: this.formUi.medNoon3,
      medEvening3: this.formUi.medEvening3,
      medNight3: this.formUi.medNight3,
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
      disabilityNo: this.formUi.disabilityNo,  
      disabilityYes: this.formUi.disabilityNo,  
      disabilityHemiYes: this.formUi.disabilityHemiYes,  
      disabilityHemi: this.formUi.disabilityHemi,
      disabilityAmputYes: this.formUi.disabilityAmputYes,
      disabilityAmput: this.formUi.disabilityAmput,
      disabilityParaYes: this.formUi.disabilityParaYes,
      disabilityPara: this.formUi.disabilityPara,
      disabilityTetraYes: this.formUi.disabilityTetraYes,
      disabilityTetra: this.formUi.disabilityTetra,
      disabilityLimbsYes: this.formUi.disabilityLimbsYes,
      disabilityLimbs: this.formUi.disabilityLimbs,
      disabilityMisalYes: this.formUi.disabilityMisalYes,
      disabilityMisal: this.formUi.disabilityMisal,
      disabilityProYes: this.formUi.disabilityProYes,
      disabilityProNo: this.formUi.disabilityProNo,
      sleepNoImp: this.formUi.sleepNoImp,
      sleepDiff: this.formUi.sleepDiff,
      sleepBreath: this.formUi.sleepBreath,
      dietWhole: this.formUi.dietWhole,
      dietNoSugar: this.formUi.dietNoSugar,
      dietVeg: this.formUi.dietVeg,
      dietDiabetic: this.formUi.dietDiabetic,
      ingestOral: this.formUi.ingestOral,
      ingestFeed: this.formUi.ingestFeed,
      ingestParent: this.formUi.ingestParent,
      excNoImp: this.formUi.excNoImp,
      excIncont: this.formUi.excIncont,
      excIncrease: this.formUi.excIncrease,
      excBladder: this.formUi.excBladder,
      bowelNoImp: this.formUi.bowelNoImp,
      bowelIncon: this.formUi.bowelIncon,
      bowelDiarr: this.formUi.bowelDiarr,
      bowelCons: this.formUi.bowelCons,
      bowelPraetor: this.formUi.bowelPraetor,
      bowelLax: this.formUi.bowelLax,
      bowelAids: this.formUi.bowelAids,
      painNo: this.formUi.painNo,
      painYes: this.formUi.painYes,
      painPart1: this.formUi.painPart1,
      painSide1: this.formUi.painSide1,
      painState1: this.formUi.painState1,
      painRest1: this.formUi.painRest1,
      painExc1: this.formUi.painExc1,
      painFreq1: this.formUi.painFreq1,
      painType1: this.formUi.painType1,
      painPart2: this.formUi.painPart2,
      painSide2: this.formUi.painSide2,
      painState2: this.formUi.painState2,
      painRest2: this.formUi.painRest2,
      painExc2: this.formUi.painExc2,
      painFreq2: this.formUi.painFreq2,
      painType2: this.formUi.painType2,
      painPart3: this.formUi.painPart3,
      painSide3: this.formUi.painSide3,
      painState3: this.formUi.painState3,
      painRest3: this.formUi.painRest3,
      painExc3: this.formUi.painExc3,
      painFreq3: this.formUi.painFreq3,
      painType3: this.formUi.painType3,
      substNo: this.formUi.substNo,
      substYes: this.formUi.substYes,
      substSmoker: this.formUi.substSmoker,
      substSmokerNr: this.formUi.substSmokerNr,
      substFormer: this.formUi.substFormer,
      substAlcohol: this.formUi.substAlcohol,
      substAlcoholReg: this.formUi.substAlcoholReg,
      substAlcoholOcc: this.formUi.substAlcoholOcc,
      substNarc: this.formUi.substNarc,
      ulcersNo: this.formUi.ulcersNo,
      ulcersYes: this.formUi.ulcersYes,
      ulcersWoundNo: this.formUi.ulcersWoundNo,
      ulcersWoundYes: this.formUi.ulcersWoundYes,
      skinNoFind: this.formUi.skinNoFind,
      skinWithFind: this.formUi.skinWithFind,
      skinDry: this.formUi.skinDry,
      skinMoist: this.formUi.skinMoist,
      skinDerm: this.formUi.skinDerm,
      skinParch: this.formUi.skinParch,
      skinHema: this.formUi.skinHema,
      careDressSelf: this.formUi.careDressSelf,
      careDressSupp: this.formUi.careDressSupp,
      careFoodSelf: this.formUi.careFoodSelf,
      careFoodSupp: this.formUi.careFoodSupp,
      careExcSelf: this.formUi.careExcSelf,
      careExcSup: this.formUi.careExcSup,
      careWalkSelf: this.formUi.careWalkSelf,
      careWalkSupp: this.formUi.careWalkSupp,
      objNo: this.formUi.objNo,
      objYes: this.formUi.objYes,
      objCompress: this.formUi.objCompress,
      objDevice: this.formUi.objDevice,
      objOrtho: this.formUi.objOrtho,
      objPros: this.formUi.objPros,
      objOthers: this.formUi.objOthers,
      skinIntact: this.formUi.skinIntact,
      skinNotInt: this.formUi.skinNotInt,
      skinNotAsc: this.formUi.skinNotAsc,
      inletsNo: this.formUi.inletsNo,
      inletsYes: this.formUi.inletsYes,
      inletsPortYes: this.formUi.inletsPortYes,
      inletsPortNo: this.formUi.inletsPortNo,
      inletsProbesYes: this.formUi.inletsProbesYes,
      inletsProbesNo: this.formUi.inletsProbesNo,
      inletsUrineYes: this.formUi.inletsUrineYes,
      inletsUrineNo: this.formUi.inletsUrineNo,
      stomataYes: this.formUi.stomataYes,
      stomataNo: this.formUi.stomataNo,
      fallNo: this.formUi.fallNo,
      fallYes: this.formUi.fallYes,
      fall1x: this.formUi.fall1x,
      fall2x: this.formUi.fall2x,
      fall3x: this.formUi.fall3x,
      fallMore: this.formUi.fallMore,
      drugsNo: this.formUi.drugsNo,
      drugsYes: this.formUi.drugsYes,
      diagnoseSync: this.formUi.diagnoseSync,
      diagnoseEpil: this.formUi.diagnoseEpil,
      diagnoseHunt: this.formUi.diagnoseHunt,
      diagnoseDiab: this.formUi.diagnoseDiab,
      diagnoseNo: this.formUi.diagnoseNo,
      allergyNo: this.formUi.allergyNo,
      allergyYes: this.formUi.allergyYes,
      allergyKnown1: this.formUi.allergyKnown1,
      allergyKnown2: this.formUi.allergyKnown2,
      allergyKnown3: this.formUi.allergyKnown3,
      valuablesYes: this.formUi.valuablesYes,
      valuablesNo: this.formUi.valuablesNo,
      valuablesRel: this.formUi.valuablesRel,
      valuablesWard: this.formUi.valuablesWard,
      informYes: this.formUi.informYes,
      informNo: this.formUi.informNo,
    };
  }
  
}