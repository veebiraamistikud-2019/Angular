import { Component, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  closeResult: string;
  modalOptions:NgbModalOptions;
  angForm: FormGroup;

  constructor(private modalService: NgbModal, private fb: FormBuilder){
    this.createForm();
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }    
  }
  
  createForm() {
    this.angForm = this.fb.group({
       title    : ['', Validators.required ],
       author   : ['', Validators.required ],
       progress : ['', Validators.required ],
       notes    : ['', Validators.required ],       
    });
  }

  message = null;

  
  onSubmit() {
    this.message = this.angForm.value
  }
  
  open(content) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
