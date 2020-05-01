import { Component, OnInit } from '@angular/core';
import { Library } from '../library.model';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-library-by-name',
  templateUrl: './get-library-by-name.component.html',
  styleUrls: ['./get-library-by-name.component.css']
})
export class GetLibraryByNameComponent implements OnInit {
  library: Library = {};
  isClickedGet: boolean = false;

  constructor(private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
  }

  getByName() {
    this.libraryService.getLibraryByName(this.library.name).subscribe((body) => {
      this.library = body;
      this.isClickedGet = true;
    })
  }

  onBack(): void {
    this.router.navigate(['/library']);
  }
}
