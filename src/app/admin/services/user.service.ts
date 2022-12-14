import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inter } from '../interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Inter[]>('http://localhost:3000/profile');
  }
  creat(payload: Inter) {
    return this.http.post<Inter>('http://localhost:3000/profile', payload);
  }
  getbyid(id: number) {
    return this.http.get<Inter>(`http://localhost:3000/profile/${id}`);
  }
  update(payload: Inter) {
    return this.http.put(
      `http://localhost:3000/profile/${payload.id}`,
      payload
    );
  }
  delete(id: number) {
    return this.http.get<Inter>(`http://localhost:3000/profile/${id}`);
  }
}
