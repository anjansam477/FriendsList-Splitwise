import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-update-friend',
  templateUrl: './update-friend.component.html',
  styleUrls: ['./update-friend.component.css']
})
export class UpdateFriendComponent implements OnInit{
  id!: number;
  friend: Friend = new Friend();
  constructor(private friendService : FriendService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.friendService.getFriendById(this.id).subscribe(data => {
        this.friend = data;
      }, error => console.log(error));
  }

  onSubmit(){
    this.friendService.updateFriend(this.id, this.friend).subscribe(data =>{
        this.goToFriendList();
    }, error => console.log(error));
  }

  goToFriendList(){
    this.router.navigate(['/friends']);
  }
}
