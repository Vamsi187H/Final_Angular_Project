import { Component, Input } from '@angular/core';

import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-box',
  templateUrl: './forum-box.component.html',
  styleUrls: ['./forum-box.component.css'],
})
export class ForumBoxComponent {
  forums: any;

  com: any;

  constructor(private fs: ForumService) {
    fs.getForum().subscribe({
      next: (data: any) => (this.forums = data),

      error: () => (this.forums = []),
    });
  }

  ngOnInit() {
    this.fs.getForum().subscribe({
      next: (data: any) => (this.forums = data),

      error: () => (this.forums = []),
    });
  }

  onPost() {
    let obj = {
      username: sessionStorage.getItem('username'),

      comment: this.com,
    };

    this.fs.postForum(obj).subscribe({
      next: () => {
        this.ngOnInit();

        this.com = '';
      },

      error: () => alert('Error on posting'),
    });

    // window.location.reload()
  }
}
