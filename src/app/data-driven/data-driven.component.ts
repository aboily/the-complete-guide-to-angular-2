import { Component } from '@angular/core';
import {FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators} from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class DataDrivenComponent {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      'username': new FormControl('aboily', Validators.required),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }
}
