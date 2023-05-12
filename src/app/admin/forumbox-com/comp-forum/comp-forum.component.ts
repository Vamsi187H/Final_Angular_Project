import { Component, Input } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-comp-forum',
  templateUrl: './comp-forum.component.html',
  styleUrls: ['./comp-forum.component.css'],
})
export class CompForumComponent {
  @Input() pd: any;

  // reply() {
  //   // Add your reply logic here
  //   console.log('Reply button clicked');
  isReply = false;
  replyText = '';
  constructor(private us: ForumService) {}
  reply() {
    if (this.isReply == false) {
      this.isReply = true;
    } else {
      this.isReply = false;
    }
    console.log('Reply button clicked');
  }
  submitReply() {
    let un = sessionStorage.getItem('username');
    let rl = this.pd.reply;
    let obj1 = {
      username: un,
      comment: this.replyText,
    };
    rl.push(obj1);
    this.us.updateForum({ reply: rl }, this.pd.id).subscribe({
      next: () => {
        alert('reply successful');
      },
      error: () => {
        alert('reply failed');
      },
    });
    this.replyText = '';
    this.isReply = false;
  }
}
