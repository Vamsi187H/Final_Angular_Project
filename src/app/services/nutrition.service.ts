import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  getdetails(id: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  getPro(): Observable<any> {
    return this.http.get(' http://localhost:4500/Nutrition');
  }

  getDetails(id: any): Observable<any> {
    return this.http.get(' http://localhost:4500/Nutrition/' + id);
  }
}
