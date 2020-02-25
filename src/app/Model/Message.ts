export class Message
{
  sender: String;
  message: String;
  date: Date;

  constructor(sender: String, message: String)
  {
    this.sender = sender;
    this.message = message;
    this.date = new Date();
  }

}
