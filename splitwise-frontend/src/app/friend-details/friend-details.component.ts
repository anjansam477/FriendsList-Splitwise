import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Friend } from '../friend';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.css']
})
export class FriendDetailsComponent implements OnInit{

  id!: number;
  friend!: Friend;
  constructor(private route: ActivatedRoute, private friendService: FriendService){ }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.friend = new Friend();
      this.friendService.getFriendById(this.id).subscribe(data => {
        this.friend = data;
      });
  }
}
