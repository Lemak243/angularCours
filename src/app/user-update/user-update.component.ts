import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/user-model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  userUpdate!: UserModel;

  constructor( private userService : UserServiceService,
               private route:ActivatedRoute,
               private back: Router
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.userUpdate = this.userService.recuperer_id(id);
  }

  onSubmitForm(form: NgForm){
    console.log(form.value);
    this.back.navigateByUrl("/user");
  }

  onReour(){
    this.back.navigateByUrl("/user");
  }

}