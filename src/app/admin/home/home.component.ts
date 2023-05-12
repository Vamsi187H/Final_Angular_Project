import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FoodcomponentsService } from 'src/app/services/foodcomponents.service';
import { DietplanService } from 'src/app/services/dietplan.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  gdata: any;
  searchText: any;
  constructor(
    private cs: FoodcomponentsService,
    private dietPlanService: DietplanService,
    private matSnackBar: MatSnackBar
  ) {
    this.getProducts();
  }

  removeItem(id: any) {
    this.dietPlanService.removeDietPlan(id).subscribe((res) => {
      this.matSnackBar.open(`Item removed from the cart`, 'Ok', {
        duration: 3000,
      });
      this.getProducts();
    });
  }

  getProducts() {
    this.gdata = this.cs.getProducts().subscribe({
      next: (data: any) => (this.gdata = data),
      error: () => (this.gdata = []),
    });
  }
}
