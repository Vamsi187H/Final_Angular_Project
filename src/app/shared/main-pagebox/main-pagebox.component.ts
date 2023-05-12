import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-pagebox',
  templateUrl: './main-pagebox.component.html',
  styleUrls: ['./main-pagebox.component.css'],
})
export class MainPageboxComponent {
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
