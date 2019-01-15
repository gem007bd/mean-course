import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts: Array<FormData> = [];
  // posts = [
  //   { title: 'first post', content: 'this is the first post content' },
  //   { title: 'seond post', content: 'this is the second post content' },
  //   { title: 'third post', content: 'this is the third post content' },
  // ];
   posts: Post[] = [];
    private postsSub: Subscription;
  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListner()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
