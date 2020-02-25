import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  username: string;
  password: string;
  passwordConfirm: string;

  constructor(private router: Router, fb: FormBuilder, private _authService: AuthenticationService, private _snackBar: MatSnackBar) {
    this.form = fb.group({
      "username": ["", Validators.compose([Validators.required, Validators.minLength(4)])],
      "password": ["", Validators.compose([Validators.required, Validators.minLength(4)])],
      "passwordConfirm": ["", Validators.required]
    })
  }

  ngOnInit() {
    this._authService.getAccounts()
  }

  //Create account using authentication service
  createAccount()
  {
    if (this._authService.CreateAccount(this.username, this.password)) {
      this._snackBar.open("Account created succesfully!", "Ok", {
        duration: 3000,
      });
      this.router.navigate(['Chat']);
    }
    else alert("This username already exist!");
  }

  //Navigate to LogIn page
  gotoLogIn()
  {
    this.router.navigate(['']);
  }
}
