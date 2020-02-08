import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(credentials) {
    this.authService.signIn({
      email: credentials.email,
      password: credentials.password,
    });
  }


}
