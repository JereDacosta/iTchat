import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Account } from '../Model/Account';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //url of mongo's accounts table
  uri = 'http://localhost:4000/account'

  public accounts: Account[]

  constructor(private http: HttpClient)
  {
    
  }

  //Create and add new account to database
  CreateAccount(username: string, password: string): boolean
  {
    this.getAccounts
    if (this.IsUsernameTaken(username) == true) {
      return false
    }
    else {
      var account = new Account(username, password);
      this.http.post(`${this.uri}/post`, account).subscribe(
        res => {
          console.log(res);
        });
      return this.connect(username);
    }
  }

  //Fetch all accounts in database and refresh data
   getAccounts()
  {
      this.http.get(this.uri).subscribe((data: any) => {
      this.accounts = data;
    });
    
  }

  //Return true if account is ok else false
  LogIn(username: string, password: string): boolean
  {
    this.getAccounts()
    for (let acc of this.accounts)
    {
      if (acc.username == username && acc.password == password)
      {
        return this.connect(acc.username);
      }
    }
    return false;
  }

  //Connecte the account
  private connect(username:string): boolean
  {
    sessionStorage.setItem("username",username);
    //set isConnected to true, TODO
    return true
  }

  //log out connected user
  LogOut()
  {
    //set isConnected to false, TODO
    sessionStorage.setItem("username", null);
  }

  //Check if username is already taken
   IsUsernameTaken(username: string)
  {   
    for (let acc of this.accounts) {
      if (acc.username == username) {
        return true
      }
    }
    return false;
  }

}
