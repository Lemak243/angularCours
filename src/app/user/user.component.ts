import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  nom!: UserModel[];
  temps$!: Observable<number>;

  constructor( private userService: UserServiceService) { }

  ngOnInit(): void {
    this.nom = this.userService.voir_utilisateur();
    this.temps$ = interval(1000);
  }


  supprimer(id_sup: number){
    this.userService.supprimer_utilisateur(id_sup);
  }

  

}
