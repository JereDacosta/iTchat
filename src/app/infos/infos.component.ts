import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {


  constructor(private _router: Router, private _authService: AuthenticationService) { }

  ngOnInit() {
  }

  //Navigate to chat page
  gotoChat()
  {
    this._router.navigate(['Chat']);
  }

  //Leave chat
  leave() {
    this._authService.LogOut();
    this._router.navigate(['']);
  }

}
