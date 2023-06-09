import { Component } from '@angular/core';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-supported-dietbox',
  templateUrl: './supported-dietbox.component.html',
  styleUrls: ['./supported-dietbox.component.css'],
})
export class SupportedDietboxComponent {
  // selected = 'All';
  names: any;

  constructor(hs: DietService) {
    hs.getDairyProducts().subscribe({
      next: (data: any) => (this.names = data),
      error: () => (this.names = []),
    });
  }
}
