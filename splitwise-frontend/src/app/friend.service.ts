import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private baseURL = "http://localhost:8080/api/v1/friends";
  constructor(private httpClient : HttpClient) { }

  getFriendList(): Observable<Friend[]>{
    return this.httpClient.get<Friend[]>(`${this.baseURL}`);
  }

  createFriend(friend: Friend): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, friend);
  }

  getFriendById(id: number): Observable<Friend>{
    return this.httpClient.get<Friend>(`${this.baseURL}/${id}`);
  }

  updateFriend(id: number, friend: Friend): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, friend);
  }

  deleteFriend(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
