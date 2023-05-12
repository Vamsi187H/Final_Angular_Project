import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dietbox-box',
  templateUrl: './dietbox-box.component.html',
  styleUrls: ['./dietbox-box.component.css']
})
export class DietboxBoxComponent {

  @Input() pd: any;

}
