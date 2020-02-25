import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InfosComponent } from './infos/infos.component';


const routes: Routes =
  [
    { path: '', component: LoginComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'Chat', component: ChatComponent },
    { path: 'Info', component: InfosComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
