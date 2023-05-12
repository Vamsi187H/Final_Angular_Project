import { Component } from '@angular/core';
import { ComplaintsService } from 'src/app/services/complaints.service';

@Component({
  selector: 'app-complaintsbox',
  templateUrl: './complaintsbox.component.html',
  styleUrls: ['./complaintsbox.component.css']
})
export class ComplaintsboxComponent {
  names:any;
  constructor(cs:ComplaintsService){
  cs.getcomplaints().subscribe(
    {
      next:(data:any)=>this.names=data,
      error:()=>this.names=[]
    }
  )
  }

}
