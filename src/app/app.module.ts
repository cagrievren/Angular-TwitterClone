import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { PostScreenComponent } from './post-screen/post-screen.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ResolverService } from './services/resolver.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post-screen', component: PostScreenComponent },
  {
    path: 'post-screen/:id', component: PostScreenComponent, resolve: {
      userID: ResolverService
    }
  },
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
    LoadingSpinnerComponent,
    NavbarComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
