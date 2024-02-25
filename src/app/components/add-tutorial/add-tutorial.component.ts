import { Component, OnInit } from '@angular/core';
import { FormUi, Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };

  formUi: FormUi = {
    livAloneCbYes: false,
    livAloneCbNo: false,
    livAloneLift: false,
    livAloneFloor: '',
    obligNo: false,
    obligYes: false,
    // surname1: '',
    // fname1: '',
    // surname2: '',
    // fname2: '',
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      livAloneCbYes: this.formUi.livAloneCbYes,
      livAloneCbNo: this.formUi.livAloneCbNo,
      livAloneLift: this.formUi.livAloneLift,
      livAloneFloor: this.formUi.livAloneFloor,
      obligNo: this.formUi.obligNo,
      obligYes: this.formUi.obligYes,
    };
    console.log("data")
    console.log(data)

    this.tutorialService.create(data)
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