import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from 'src/app/service/book.service';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';
import { Library } from 'src/app/library-object/library.model';
import { BookInfo } from 'src/app/book-info/bookinfo.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = {};
  bookInfo: BookInfo = {};
  libraries: Library[] = [];
  panelOpenState = false;

  constructor(private bookService: BookService, private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.addBookInfo();
    this.bookService.addBookInLibrary(this.book.libraryId, this.book);
  }

  addBookInfo() {
    this.book.bookInfo = this.bookInfo;
  }

  getAllLibraries() {
    this.libraryService.getAllLibraries().subscribe((body) => {
      this.libraries = body;
    })
  }

  addLibraryId(id: number) {
    this.book.libraryId = id;
  }

  onBack(): void {
    this.router.navigate(['/library/book']);
  }

}
