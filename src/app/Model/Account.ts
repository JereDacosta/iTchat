export class Account
{
  username: string;
  password: string;
  joinedDate: Date;
  isOnline: boolean;

  constructor(username: string, password:string)
  {
    this.username = username;
    this.password = password;
    this.isOnline = false;
    this.joinedDate = new Date();
  }
}
