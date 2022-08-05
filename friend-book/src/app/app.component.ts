// @ts-ignore
import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friend-book';
  languageArray = ['HTML', 'CSS', 'JS', 'PHP', 'KLINGON', 'TYPESCRIPT', 'C++'];
  friend = new Friend(null, null, null, null, null)

  submitForm(){
    console.log(this.friend);
    const observable = this.addFriendService.addFriend(this.friend);
    observable.subscribe({
      next: (data) => {
        console.log(data);
        console.log('success!');
      },
      error: (error) => {
        console.log(error);
        console.log('failed');
      },
    });
  }

  // @ts-ignore
  constructor(private addFriendService: AddFriendService){
  }
  addFriend(){
    this.addFriendService.addFriend(this.friend);
  }
}


