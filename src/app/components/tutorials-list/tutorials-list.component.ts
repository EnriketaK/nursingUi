import { Component, OnInit } from '@angular/core';
import { FormUi, Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  forms?: FormUi[];
  currentForm: FormUi = {};
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe({
        next: (data) => {
          this.forms = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentForm = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(form: FormUi, index: number): void {
    this.currentForm = form;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentForm = {};
    this.currentIndex = -1;

    // this.tutorialService.findByTitle(this.title)
    //   .subscribe({
    //     next: (data) => {
    //       this.tutorials = data;
    //       console.log(data);
    //     },
    //     error: (e) => console.error(e)
    //   });
  }

}