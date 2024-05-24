import { Injectable } from '@angular/core';
import { Comment } from './../models/all-car-data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class comentService {
  private baseUrl = 'http://localhost:8080/api/comment';

  constructor(private http: HttpClient) {}

  saveComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}/save`, comment);
  }

  getAllCommentsByCarId(carId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/getByCarId?id=${carId}`);
  }

  addLike(commentId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/like?id=${commentId}`, null);
  }

  addDislike(commentId: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/dislike?id=${commentId}`, null);
  }
}
