import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { RestaurantServiceService } from '../services/restaurant-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  client$!:Observable<Restaurant[]>;

  constructor( private service: RestaurantServiceService) { }

  ngOnInit(): void {
    this.client$ = this.service.getAll();
  }

}
