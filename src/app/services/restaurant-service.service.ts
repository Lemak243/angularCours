import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor( private http:HttpClient) { }

  getAll():Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8888/php/api.php");
  }

  getId(menuId: number):Observable<Restaurant>{
   return this.http.get<Restaurant>(`http://localhost:8888/php/api.php/${menuId}`);
  }

  post(){}

  delette(){}
}
