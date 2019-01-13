import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import { Customer } from './customer.model';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  userdata: FormGroup;

  customerAccount: Customer;
  customerAccounts: Customer[];

  constructor(fb: FormBuilder) {
    this.userdata = fb.group({
      name: '',
      email: '',
      password: '',
      confpassword: '',
    });

    this.customerAccount = new Customer();
    this.customerAccounts = [];

  }

  ngOnInit() {
  }

  saveData() {
    this.customerAccount = new Customer();
   this.customerAccount.name = this.userdata.value.name;
   this.customerAccount.email = this.userdata.value.email;
   this.customerAccount.password = this.userdata.value.password;

   this.customerAccounts.push(this.customerAccount);
   const fbs = new FormBuilder();
   this.userdata = fbs.group({
    name: '',
    email: '',
    password: '',
    confpassword: '',
  });

   console.log(this.customerAccounts);
  }

}
