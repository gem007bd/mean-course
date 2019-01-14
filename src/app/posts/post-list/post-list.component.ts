import { Component, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent {
  // posts: Array<FormData> = [];
  // posts = [
  //   { title: 'first post', content: 'this is the first post content' },
  //   { title: 'seond post', content: 'this is the second post content' },
  //   { title: 'third post', content: 'this is the third post content' },
  // ];
  @Input() posts: Post[] = [];
}
