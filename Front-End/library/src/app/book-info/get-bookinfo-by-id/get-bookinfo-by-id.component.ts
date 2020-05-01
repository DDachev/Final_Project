import { Component, OnInit } from '@angular/core';
import { BookInfo } from '../bookinfo.model';
import { BookinfoService } from 'src/app/service/bookinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-bookinfo-by-id',
  templateUrl: './get-bookinfo-by-id.component.html',
  styleUrls: ['./get-bookinfo-by-id.component.css']
})
export class GetBookinfoByIdComponent implements OnInit {
  bookInfo: BookInfo = {};
  isClickedGet: boolean = false;
  genre: string;

  constructor(private bookinfoService: BookinfoService, private router: Router) { }

  ngOnInit(): void {
  }

  getById(id: number) {
    this.bookinfoService.getBookInfoById(id).subscribe((body) => {
      this.bookInfo = body;
      this.isClickedGet = true;
    })
  }

  onBack(): void {
    this.router.navigate(['/library/bookinfo']);
  }
}
