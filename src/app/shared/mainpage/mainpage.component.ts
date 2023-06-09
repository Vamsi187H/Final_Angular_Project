import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent {
  // showFiller = false;
  searchText: any;
  constructor(private router: Router, private route: ActivatedRoute) {}
  navigate(url: string) {
    if (url == '') {
      window.location.reload();
    } else {
      this.router.navigate([url], { relativeTo: this.route });
    }
  }

  logout() {
    this.router.navigateByUrl('/login');
  }
}
