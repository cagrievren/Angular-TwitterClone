import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') item: Post;
  @Input() i: number;
  @Output() deleteCard = new EventEmitter<number>();
  
  constructor() {}

  ngOnInit() {
  }

  delete() {
    this.deleteCard.emit(this.i);
  }
}
