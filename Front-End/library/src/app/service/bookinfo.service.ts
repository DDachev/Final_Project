import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookInfo } from '../book-info/bookinfo.model';

@Injectable({
  providedIn: 'root'
})
export class BookinfoService {
  bookInfo: BookInfo = {};

  constructor(private http: HttpClient) { }

  public getBookInfoByBook(id: number) {
    return this.http.get<BookInfo>(`server/book/${id}/bookInfo`);
  }

  public getBookInfoById(id: number) {
    return this.http.get<BookInfo>(`/server/bookInfo/${id}`);
  }

  public getBookInfosByGenre(genre: string) {
    return this.http.get<BookInfo[]>(`/server/bookInfo/genre/${genre}`);
  }

  public getBookInfosByAuthor(author: string) {
    return this.http.get<BookInfo[]>(`/server/bookInfo/author/${author}`);
  }
}
