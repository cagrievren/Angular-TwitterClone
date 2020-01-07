import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { PostScreenComponent } from './post-screen/post-screen.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'post-screen', component: PostScreenComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PostScreenComponent,
    DetailComponent,
    LoginComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
