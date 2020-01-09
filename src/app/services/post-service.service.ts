import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { Post } from "src/app/post.model";

@Injectable({
  providedIn: "root"
})
export class PostServiceService {
  url = "https://angulartwitterclone.firebaseio.com/posts";
  customersRef: AngularFireList<any> = null;
  constructor(private http: HttpClient, private firestore: AngularFireDatabase ) {
    this.customersRef = firestore.list('/posts');
  }

  getPosts() {
    return this.http.get(this.url+'.json');
  }

  addPost(postData: Post) {
    return this.http.post(this.url+ '.json', postData);
  }

  deletePost(id) {
    console.log(`${this.url}/${id}`);
    // this.firestore.collection;
    // this.firestore.collection('posts/').doc(id).delete();
    // this.firestore.collection('/posts').doc(id).delete();
    return this.customersRef.remove(id);
  }

  // addPost(id: string, author: string, text: string, time: Date) {
  //   // let newPost = Object.assign({}, post);
  //   // newPost.author = user.email;
  //   // newPost.id = (user.name) + ' ' + (user.surname);
  //   // this.posts.push(newPost);
  //   // console.log(this.posts);
  //   const postData: Post = { id: id, author: author, text: text, time: time };
  //   this.http
  //   .post<{ name: string }>(
  //     'https://angulartwitterclone.firebaseio.com/posts.json',
  //     postData
  //   )
  //   .subscribe(
  //     responseData => {
  //       console.log(responseData);
  //     });
  // }

  //   fetchPosts(){
  //     return this.http
  //     .get<{ [key: string]: Post }>(
  //       'https://angulartwitterclone.firebaseio.com/posts.json'
  //     .pipe(
  //       map(responseData => {
  //         const postsArray: Post[] = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             postsArray.push({ ...responseData[key], id: key });
  //           }
  //         }
  //         return postsArray;
  //       })
  //     );
  //   }
  // }
}
