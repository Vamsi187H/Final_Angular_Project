import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-forum',
  templateUrl: './comp-forum.component.html',
  styleUrls: ['./comp-forum.component.css'],
})
export class CompForumComponent {
  @Input() pd: any;

  isReplay = false;
  replayText = '';
  replay() {
    if (this.isReplay == false) {
      this.isReplay = true;
    } else {
      this.isReplay = false;
    }
    console.log('Replay Clicked');
  }

  submitReplay() {
    console.log(this.replayText);
    this.replayText = '';
    this.isReplay = false;
  }
}
