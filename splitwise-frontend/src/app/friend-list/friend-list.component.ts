import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';
@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit{
  friends!: Friend[];

  constructor(private friendService: FriendService, private router: Router) { }
  ngOnInit(): void {
    this.getFriends();
  }

  private getFriends(){
    this.friendService.getFriendList().subscribe(data => {
      this.friends = data;
    });
  }

  friendDetails(id: number){
    this.router.navigate(['friend-details', id]);
  }

  updateFriend(id: number){
    this.router.navigate(['update-friend', id]);
  }

  deleteFriend(id: number){
    this.friendService.deleteFriend(id).subscribe(data =>{
      console.log(data);
      this.getFriends();
    });
  }
}
