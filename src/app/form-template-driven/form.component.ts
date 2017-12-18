import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../shared/services/auth.service";

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

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.auth.logIn();
    console.log(this.auth.isLoggedIn);
  }

  putRandomEmail() {
    const randomEmail = 'impavlyuchenko@gmail.com';
    this.form.form.patchValue({
      email: randomEmail
    });
  }

}
