import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() item: {id: string, author: string, text: string, time: Date};
  
  constructor() { }

  ngOnInit() {
  }

}
