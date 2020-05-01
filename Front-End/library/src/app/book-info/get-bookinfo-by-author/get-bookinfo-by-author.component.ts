import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../bookinfo.model';
import { BookinfoService } from 'src/app/service/bookinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-bookinfo-by-author',
  templateUrl: './get-bookinfo-by-author.component.html',
  styleUrls: ['./get-bookinfo-by-author.component.css']
})
export class GetBookinfoByAuthorComponent implements OnInit {
  bookInfo: BookInfo = {};
  booksInfo: BookInfo[] = [];
  isClickedGet: boolean = false;
  nameOfAuthor: string;

  constructor(private bookinfoService: BookinfoService, private router: Router) { }

  ngOnInit(): void {
  }

  getByAuthor(author: string) {
    this.bookinfoService.getBookInfosByAuthor(author).subscribe((body) => {
      this.booksInfo = body;
      this.isClickedGet = true;
    })
  }

  onBack(): void {
    this.router.navigate(['/library/bookinfo']);
  }

}
