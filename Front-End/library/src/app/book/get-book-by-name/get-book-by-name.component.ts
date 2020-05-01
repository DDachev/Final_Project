import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-book-by-name',
  templateUrl: './get-book-by-name.component.html',
  styleUrls: ['./get-book-by-name.component.css']
})
export class GetBookByNameComponent implements OnInit {
  book: Book = {};
  isClickedGet: boolean = false;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  getByName() {
    this.bookService.getBookByName(this.book.nameOfBook).subscribe((body) => {
      this.book = body;
      this.isClickedGet = true;
    })
  }

  onBack(): void {
    this.router.navigate(['/library/book']);
  }
}
