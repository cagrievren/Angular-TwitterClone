import { Injectable } from '@angular/core';
import { Post } from 'src/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  posts: Post[] = []
  
  constructor() { }

  addPost(post, user) {
    let newPost = Object.assign({}, post);
    newPost.author = user.email;
    newPost.id = (user.name) + ' ' + (user.surname);
    this.posts.push(newPost);
    console.log(this.posts);   
  }
}
