import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-voir-menu',
  templateUrl: './voir-menu.component.html',
  styleUrls: ['./voir-menu.component.scss']
})
export class VoirMenuComponent implements OnInit {

  nume$!:Observable<Restaurant>;

  constructor( private menu : RestaurantServiceService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.nume$ = this.menu.getId(id);
  }

}
