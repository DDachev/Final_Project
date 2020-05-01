import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from 'src/app/service/book.service';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';
import { Library } from 'src/app/library-object/library.model';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  book: Book = {};
  books: Book[] = [];
  libraries: Library[] = [];
  isDeleted: boolean = false;

  constructor(private bookService: BookService, private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
  }

  delete() {
    this.bookService.deleteBook(this.book.id);
    this.isDeleted = true;
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

  addLibraryId(id: number) {
    this.book.libraryId = id;
  }

  onBack(): void {
    this.router.navigate(['/library/book']);
  }

}
