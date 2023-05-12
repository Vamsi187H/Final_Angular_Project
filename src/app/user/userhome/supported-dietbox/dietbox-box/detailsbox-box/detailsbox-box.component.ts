import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-detailsbox-box',
  templateUrl: './detailsbox-box.component.html',
  styleUrls: ['./detailsbox-box.component.css'],
})
export class DetailsboxBoxComponent {
  id: any;
  details1: any;
  constructor(private Ds: DietService, private ar: ActivatedRoute) {
    this.ar.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        this.readData();
      },
      error: () => (this.id = 0),
    });
  }

  readData() {
    this.Ds.getDetails(this.id).subscribe({
      next: (data: any) => (this.details1 = data),
      error: () => (this.details1 = {}),
    });
  }
}
