import { Component, Input  } from '@angular/core';
import {data} from './booksData.js';

interface Book{
  img : string
  title: string,
  author: string,
  progress: string,
  notes: string,
}

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})

export class BooklistComponent {
  books: Book[] = data;
    
  @Input() message: any;

  constructor() {
    console.log(this.books)   

  }        


}
