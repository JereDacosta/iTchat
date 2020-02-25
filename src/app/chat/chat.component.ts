import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ChatService } from '../Services/chat.service';
import { Message } from '../Model/Message';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
import 'hammerjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements AfterViewInit {

  user: String;
  messageText: String;
  @ViewChild("msgDiv", { static: false }) msgDiv: ElementRef;

  constructor(public _chatService: ChatService, private _router: Router, private _authService: AuthenticationService) {
    //Look for new messages every second
    setInterval(this.getMessages.bind(this), 1000);
    this.user = sessionStorage.getItem("username");
  }

  ngOnInit() {
    //init messages
     this._chatService.getMessages();
  }

  //Should scroll down msgDiv, TO FIX
  ngAfterViewInit(): void {
    this.msgDiv.nativeElement.scrollTop = this.msgDiv.nativeElement.scrollHeight;
  }

  //Refresh messages
  getMessages()
  {
    this._chatService.getMessages();
  }

  //Send message
  sendMessage() {
    if (this.messageText.length > 0) {
      var message = new Message(this.user, this.messageText);
      this._chatService.sendMessage(message);
      this.eraseMessage()
    }   
  }

  //Erase message input box
  eraseMessage() {
    this.messageText = "";
  }

  //Leave chat room
  leave()
  {
    this._authService.LogOut();
    this._router.navigate(['']);
  }

  //Navigate to infos page
  gotoInfos()
  {
    this._router.navigate(['Info']);
  }

  //Not used, makes app slow
  //getUsersCount() :number
  //{
  //  this._authService.getAccounts()
  //  return this._authService.accounts.length;
  //}

}
