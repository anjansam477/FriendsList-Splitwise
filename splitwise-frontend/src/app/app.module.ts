import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { CreateFriendComponent } from './create-friend/create-friend.component';
import { FormsModule } from '@angular/forms';
import { UpdateFriendComponent } from './update-friend/update-friend.component';
import { FriendDetailsComponent } from './friend-details/friend-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendListComponent,
    CreateFriendComponent,
    UpdateFriendComponent,
    FriendDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
