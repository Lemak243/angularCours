import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  nom: UserModel[]=[{
    id:1,
    nom: "makwambala"
  },
  {
    id:2,
    nom: "yves mak"
  },
  {
    id:3,
    nom: "le mak"
  }]

  constructor() { }

  recuperer_id(id:number):UserModel{
    const id_user = this.nom.find( t => t.id === id);
    if(id_user){
      return id_user;
    } else {
      throw new Error ("L'identifiant que vous cherchez n'existe pas");
    }
  }

  voir_utilisateur():UserModel[] {
    return this.nom;
  }

  supprimer_utilisateur(id_sup:number): void{
    const sup_user = this.nom.findIndex(t => t.id === id_sup);
    console.log(sup_user);
    if(sup_user != -1){
      this.nom.splice(sup_user, 1);
    }
  }

  ajouter_utilisateur(formulaire_Insertion:{ nom: string}){
    const envoie_formulaire: UserModel = {
      id: this.nom[this.nom.length -1].id + 1,
      nom: formulaire_Insertion.nom
    };

    this.nom.push(envoie_formulaire);
  }

}
