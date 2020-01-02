import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from 'src/app/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  constructor(private http: HttpClient) { }

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

