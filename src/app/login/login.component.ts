import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  username: string;
  password: string;

  constructor(private router: Router, fb: FormBuilder, private _snackBar: MatSnackBar, private _authService: AuthenticationService)
  {
    this.form = fb.group({
      "username": ["", Validators.required],
      "password": ["", Validators.required]
    })
  }

  ngOnInit() {
    this._authService.getAccounts();
  }

  //Connect user to authentication service
  connect()
  {
    if (this._authService.LogIn(this.username,this.password)) 
    {
      this._snackBar.open("Connected as " + this.username, "Ok", {
        duration: 3000,
      });
      this.router.navigate(['/Chat']);
    }
    else alert("Error! Password or username invalid. Please try again!")
  }

  //Navigate to register page
  gotoSignUp()
  {
    this.router.navigate(['SignUp']);
  }

  //Made for testing, skip the register process and the login process
  connectAsDev() {
    this._snackBar.open("Connected as developper account", "Ok", {
      duration: 3000,
    });
    sessionStorage.setItem("username", "Developper");
    this.router.navigate(['/Chat']);
  }

}
