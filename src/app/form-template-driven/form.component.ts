import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData = {};
  isSubmited = false;
  @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Yes'
  }, {
    type: 'no',
    text: 'No'
  }];

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
  }

  putRandomEmail() {
    const randomEmail = 'impavlyuchenko@gmail.com';
    this.form.form.patchValue({
      email: randomEmail
    });
  }

}
