import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.scss']
})
export class UserInsertComponent implements OnInit {

  formulaire!: FormGroup;

  constructor( private formulaireConstructeur: FormBuilder,
               private userServices: UserServiceService
    ) { }

  ngOnInit(): void {
    this.formulaire = this.formulaireConstructeur.group({
      nom: [null, Validators.required]
    });
  }

  onFormulaireEnvoie():void{
    this.userServices.ajouter_utilisateur(this.formulaire.value);
  }

}
