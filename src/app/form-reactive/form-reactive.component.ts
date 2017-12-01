import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  answers = [{
    type: 'yes',
    text: 'Yes'
  }, {
    type: 'no',
    text: 'No'
  }];

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', [Validators.required]),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submited!', this.form);
  }

}
