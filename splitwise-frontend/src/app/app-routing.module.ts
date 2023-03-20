import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFriendComponent } from './create-friend/create-friend.component';
import { FriendDetailsComponent } from './friend-details/friend-details.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { UpdateFriendComponent } from './update-friend/update-friend.component';

const routes: Routes = [
  {path: 'friends', component: FriendListComponent},
  {path: 'create-friend', component: CreateFriendComponent},
  {path: '', redirectTo: 'friends', pathMatch: 'full'},
  {path: 'update-friend/:id', component: UpdateFriendComponent},
  {path: 'friend-details/:id', component: FriendDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
