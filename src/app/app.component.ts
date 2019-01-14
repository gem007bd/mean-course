import { Component } from '@angular/core';

import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  stroedPosts: Post[] = [];

  onPostAdded(post) {
    this.stroedPosts.push(post);
  }
}
