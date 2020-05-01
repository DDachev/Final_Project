import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookInfo } from 'src/app/book-info/bookinfo.model';
import { Library } from 'src/app/library-object/library.model';
import { BookService } from 'src/app/service/book.service';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';
import { BookinfoService } from 'src/app/service/bookinfo.service';

@Component({
  selector: 'app-change-book',
  templateUrl: './change-book.component.html',
  styleUrls: ['./change-book.component.css']
})
export class ChangeBookComponent implements OnInit {
  book: Book = {};
  books: Book[] = [];
  bookInfo: BookInfo = {};
  libraries: Library[] = [];
  panelOpenState = false;

  constructor(private bookService: BookService, private libraryService: LibraryService, private bookinfoService: BookinfoService, private router: Router) { }

  ngOnInit(): void {
  }

  change() {
    this.book.bookInfo = this.bookInfo;
    this.bookService.changeBook(this.book.libraryId, this.book);
  }

  getAllLibraries() {
    this.libraryService.getAllLibraries().subscribe((body) => {
      this.libraries = body;
    })
  }

  getAllBooks() {
    this.bookService.getAllBooks(this.book.libraryId).subscribe((body) => {
      this.books = body;
    })
  }

  getBookInfo(id: number) {
    this.bookinfoService.getBookInfoByBook(id).subscribe((body) => {
      this.bookInfo = body;
    });
  }

  addLibraryId(id: number) {
    this.book.libraryId = id;
  }

  addBookId(id: number) {
    this.book.id = id;
  }

  onBack(): void {
    this.router.navigate(['/library/book']);
  }
}
