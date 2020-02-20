import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { PostScreenComponent } from "./post-screen/post-screen.component";
import { DetailComponent } from "./detail/detail.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { RouterModule, Routes } from "@angular/router";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { ResolverService } from "./services/resolver.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PostComponent } from "./components/post/post.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: "register", component: SignUpComponent },
  { path: "login", component: SignInComponent },
  { path: "post-screen", component: PostScreenComponent },
  {
    path: "post-screen/:id",
    component: PostScreenComponent,
    resolve: {
      userID: ResolverService
    }
  },
  { path: "detail", component: DetailComponent },
  {
    path: "detail/:id",
    component: DetailComponent,
    resolve: {
      userID: ResolverService
    }
  },
  { path: "search", component: SearchComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PostScreenComponent,
    DetailComponent,
    SignInComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
    PostComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
