import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public book: Book;

  constructor(private http: HttpClient) { }

  addBookInLibrary(id: number, book: Book) {
    this.http.post<Book>(`server/library/${id}/book`, book).subscribe((body) => {
      console.log("Add book");
    });
  }

  getBookByName(bookName: string) {
    return this.http.get<Book>(`/server/book/name/${bookName}`);
  }

  getBookById(id: number) {
    return this.http.get<Book>(`/server/book/${id}`);
  }

  getAllBooks(id: number) {
    return this.http.get<Book[]>(`/server/library/${id}/books`);
  }

  changeBook(id: number, book: Book) {
    this.http.put<Book>(`server/library/${id}/book`, book).subscribe((body) => {
      console.log("Change book");
    })
  }

  deleteBook(id: number) {
    this.http.delete<Book>(`server/book/${id}`).subscribe((body) => {
      console.log("Delete book with id: " + id);
    })
  }

}
