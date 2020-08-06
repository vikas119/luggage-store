import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Form} from "../form";
import {SendToDbService} from "../send-to-db.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  form_data: any;

  constructor(
    private postdata: SendToDbService
  ) {
    this.form_data = new Form();
  }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  submit_form() {
    this.postdata.create(this.form_data);
  }
}
