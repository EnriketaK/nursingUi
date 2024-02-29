import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUi, Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {

  @Input() viewMode = false;

  // @Input() currentForm: FormUi = {
  //   title: '',
  //   description: '',
  //   published: false
  // };
  
  @Input() currentForm: FormUi = {
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

  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.tutorialService.get(id)
      .subscribe({
        next: (data) => {
          this.currentForm = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    // const data = {
    //   title: this.currentForm.title,
    //   description: this.currentForm.description,
    //   published: status
    // };

    // this.message = '';

    // this.tutorialService.update(this.currentForm.id, data)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       this.currentForm.published = status;
    //       this.message = res.message ? res.message : 'The status was updated successfully!';
    //     },
    //     error: (e) => console.error(e)
    //   });
  }

  updateTutorial(): void {
    this.message = '';

    // this.tutorialService.update(this.currentForm.id, this.currentForm)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       this.message = res.message ? res.message : 'This tutorial was updated successfully!';
    //     },
    //     error: (e) => console.error(e)
    //   });
  }

  deleteTutorial(): void {
    // this.tutorialService.delete(this.currentForm.id)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       this.router.navigate(['/tutorials']);
    //     },
    //     error: (e) => console.error(e)
    //   });
  }

}