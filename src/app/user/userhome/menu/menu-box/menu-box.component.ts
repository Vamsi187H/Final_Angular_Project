import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-box',
  templateUrl: './menu-box.component.html',
  styleUrls: ['./menu-box.component.css'],
})
export class MenuBoxComponent {
  @Input() pd: any;
}
