// @ts-ignore
import { Component, onInit } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';


// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements onInit {
  title = 'friend-book';
  languageArray = ['HTML', 'CSS', 'JS', 'PHP', 'KLINGON', 'TYPESCRIPT', 'C++'];
  friend = new Friend(null, null, null, null, null)
  allFriends: any;

  constructor(private addFriendService: AddFriendService) {

  }

  addFriend() {
    this.addFriendService.addFriend(this.friend);
  }


  ngOnInit(): void {
    this.fetchFriends('http://localhost:6969/allFriends');
  }


  submitForm() {
    console.log(this.friend);
    const observable = this.addFriendService.addFriend(this.friend);
    observable.subscribe({
      next: (data) => {
        console.log(data);
        console.log('success!');
        this.fetchFriends('http://localhost:6969/allFriends');
      },
      error: (error) => {
        console.log(error);
        console.log('failed');
      },
    });
  }

  public async fetchFriends(url: string): Promise<any> {
    let response = await fetch(url, {method: 'GET', headers: {'content-type': 'application/json'}});
    this.allFriends = await response.json();
  }
}




