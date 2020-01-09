import { Injectable, Query } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Post } from "src/app/post.model";

@Injectable({
  providedIn: "root"
})
export class PostServiceService {
  
  url = "https://angulartwitterclone.firebaseio.com/posts";
  postsRef: AngularFireList<any> = null;
  constructor(private http: HttpClient, private angularFireDatabase: AngularFireDatabase ) {
    this.postsRef = angularFireDatabase.list('/posts');
  }

  getPosts() {
    return this.http.get(this.url + '.json');
  }

  addPost(postData: Post) {
    return this.http.post(this.url + '.json', postData);
  }

  deletePost(id) {
    console.log(`${this.url}/${id}`);
    return this.postsRef.remove(id);
  }
  
  getOnlyUser() {
    let userRef = this.angularFireDatabase.database.ref('/posts');
  }
}
