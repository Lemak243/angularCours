import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { VoirMenuComponent } from './menu/voir-menu/voir-menu.component';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'userUpdate/:id', component: UserUpdateComponent},
  {path: 'user', component: UserComponent},
  {path: 'userInsert', component: UserInsertComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'voirMenu/:id', component: VoirMenuComponent},
  {path: 'voirMenu', component: VoirMenuComponent},
  {path: '', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
