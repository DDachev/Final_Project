import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../bookinfo.model';
import { BookinfoService } from 'src/app/service/bookinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-bookinfo-by-genre',
  templateUrl: './get-bookinfo-by-genre.component.html',
  styleUrls: ['./get-bookinfo-by-genre.component.css']
})
export class GetBookinfoByGenreComponent implements OnInit {
  bookInfo: BookInfo = {};
  booksInfo: BookInfo[] = [];
  isClickedGet: boolean = false;
  genre: string;

  constructor(private bookinfoService: BookinfoService, private router: Router) { }

  ngOnInit(): void {
  }

  getByGenre(genre: string) {
    this.bookinfoService.getBookInfosByGenre(genre).subscribe((body) => {
      this.booksInfo = body;
      this.isClickedGet = true;
    })
  }

  onBack(): void {
    this.router.navigate(['/library/bookinfo']);
  }
}
