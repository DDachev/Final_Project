import { Component, OnInit } from '@angular/core';
import { Library } from '../library.model';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-library-by-id',
  templateUrl: './get-library-by-id.component.html',
  styleUrls: ['./get-library-by-id.component.css']
})
export class GetLibraryByIdComponent implements OnInit {
  library: Library = {};
  isClickedGet: boolean = false;

  constructor(private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
  }

  getById() {
    this.libraryService.getLibraryById(this.library.id).subscribe((body) => {
      this.library = body;
      this.isClickedGet = true;
    })
  }

  onBack(): void {
    this.router.navigate(['/library']);
  }
}
