import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-create-friend',
  templateUrl: './create-friend.component.html',
  styleUrls: ['./create-friend.component.css']
})
export class CreateFriendComponent implements OnInit{

  friend: Friend = new Friend();
  constructor(private friendService: FriendService, private router: Router ) { }
  ngOnInit(): void {
  }

  saveFriend(){
    this.friendService.createFriend(this.friend).subscribe(data =>{
      console.log(data);
      this.goToFriendList();
    }, error => console.log(error));
  }

  goToFriendList(){
    this.router.navigate(['/friends']);
  }

  onSubmit(){
    console.log(this.friend);
    this.saveFriend();
  }
}
