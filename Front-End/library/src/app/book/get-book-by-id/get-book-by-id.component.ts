import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';
import { Book } from '../book.model';

@Component({
  selector: 'app-get-book-by-id',
  templateUrl: './get-book-by-id.component.html',
  styleUrls: ['./get-book-by-id.component.css']
})
export class GetBookByIdComponent implements OnInit {
  book: Book = {};
  isClickedGet: boolean = false;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  getById() {
    this.bookService.getBookById(this.book.id).subscribe((body) => {
      this.book = body;
      this.isClickedGet = true;
    })
  }

  onBack(): void {
    this.router.navigate(['/library/book']);
  }

}
