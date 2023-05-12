import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent {
  constructor(private router: Router) {}

  navigate(url: string) {
    if (url == '') {
      window.location.reload();
    } else {
      this.router.navigate([url]);
    }
  }
}
