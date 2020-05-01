import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';
import { Book } from '../book.model';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.css']
})
export class GetAllBooksComponent implements OnInit {
  book: Book = {};
  books: Book[] = [];
  isClickedGetAll: boolean = false;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  getAll() {
    this.bookService.getAllBooks(this.book.libraryId).subscribe((body) => {
      this.books = body;
      this.isClickedGetAll = true;
    })
  }

  onBack(): void {
    this.router.navigate(['/library/book']);
  }

}
