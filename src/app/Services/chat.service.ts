import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../Model/Message';


//Makes the service injectable
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  //url of database
  uri = 'http://localhost:4000/message'


  public messages$: Observable<Message[]>

  constructor(private http: HttpClient) {

  }

  //Send message to database via HttpPost
  sendMessage(message: Message) {
    this.http.post(`${this.uri}/post`, message).subscribe(
      res => {
        console.log(res);
        this.getMessages();
      }
    );    
  }

  //Get all messages from database via HttpGet
  getMessages() {
    return this.http.get(this.uri).subscribe((data: Observable<Message[]>) => {
      this.messages$ = data; 
    });
  }

}
