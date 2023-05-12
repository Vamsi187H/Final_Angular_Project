import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ComplaintsService } from 'src/app/services/complaints.service';

@Component({
  selector: 'app-complaint-box',
  templateUrl: './complaint-box.component.html',
  styleUrls: ['./complaint-box.component.css'],
})
export class ComplaintBoxComponent {
  stateCtrl = new FormControl('');

  fname: any;
  email: any;
  message: any;
  product: any;
  errors: string[] = [];

  constructor(private cs: ComplaintsService) {
    //
    //
  }

  //
  ngOnInit(): void {}
  submit() {
    this.errors = [];
    if (this.errors.length == 0) {
      let obj = {
        id: Math.round(Math.random() * 100000),
        fname: this.fname,
        email: this.email,
        message: this.message,
        product: this.product,
      };
      this.cs.postComplaint(obj).subscribe({
        next: () => {
          console.log(obj);
          alert('Your complaint is raised');
          (this.fname = ''),
            (this.email = ''),
            (this.message = ''),
            (this.product = '');
        },
        error: () => alert('Your Compliant is Raised :)'),
      });
    }
  }
  //
}
