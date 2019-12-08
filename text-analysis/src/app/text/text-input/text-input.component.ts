import { Component, OnInit } from '@angular/core';
import { TextRequestService } from './text-input.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})

export class TextInputComponent implements OnInit {
  public firstUrl: string;
  public secondUrl: string;
  public textToCompare: {
    firstText,
    secondText
  };
  public firstRequestError: string;

  constructor(private textRequestService: TextRequestService
  ) { }

  ngOnInit() {
    // To something
  }
  onFetchFirstText() {
    this.textRequestService.getTextFile(this.firstUrl)
      .subscribe(results => this.textToCompare.firstText = results,
        error => this.firstRequestError = error);
  }
  onFetchSecondText() {
    if (this.secondUrl) {
      // CHeck the text
    }
  }
}
