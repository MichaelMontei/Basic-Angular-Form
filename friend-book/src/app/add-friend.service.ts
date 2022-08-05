import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  public _http: HttpClient;
  private _url : string = "http://localhost:6969/";

  constructor(http: HttpClient) {
    this._http = http;
  }

  addFriend(friend: Friend) {
    return this._http.post(this._url, friend);
  }
}
