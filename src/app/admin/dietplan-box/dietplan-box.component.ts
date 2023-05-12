import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DietplanService } from 'src/app/services/dietplan.service';
import { nutrition } from '../admin-home/nutrition-model';
// import { nutrition } from './nutrition-model';

@Component({
  selector: 'app-dietplan-box',
  templateUrl: './dietplan-box.component.html',
  styleUrls: ['./dietplan-box.component.css'],
})
export class DietplanBoxComponent {
  model: nutrition = new nutrition();

  constructor(
    private dietPlanService: DietplanService,
    private matSnackBar: MatSnackBar,
    private route: Router
  ) {}

  ngOnInit() {}

  onSubmit(data: any) {
    this.dietPlanService.addDietPlan(this.model).subscribe((res) => {
      this.matSnackBar.open('Diet Plan Added Successfully', 'Ok', {
        duration: 3000,
      });
      this.route.navigate(['home']);
    });
  }
}
