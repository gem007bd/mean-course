import { Component, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model' ;
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.less']
})
export class PostCreateComponent {

  constructor(public postService: PostService ) {}

  newPost = 'No content';
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
  }
}
