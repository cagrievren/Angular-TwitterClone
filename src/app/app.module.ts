import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { PostScreenComponent } from './post-screen/post-screen.component';
import { DetailComponent } from './detail/detail.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'sign-in', component: SignInComponent},
  { path: 'post-screen', component: PostScreenComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PostScreenComponent,
    DetailComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
