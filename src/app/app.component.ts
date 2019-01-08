import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  stroedPosts = [];

  onPostAdded(post) {
    this.stroedPosts.push(post);
  }
}
