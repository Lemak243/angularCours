import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'userUpdate/:id', component: UserUpdateComponent},
  {path: 'user', component: UserComponent},
  {path: 'userInsert', component: UserInsertComponent},
  {path: '', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
