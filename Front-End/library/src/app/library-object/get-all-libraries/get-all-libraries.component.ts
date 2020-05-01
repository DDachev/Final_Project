import { Component, OnInit } from '@angular/core';
import { Library } from '../library.model';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-libraries',
  templateUrl: './get-all-libraries.component.html',
  styleUrls: ['./get-all-libraries.component.css']
})
export class GetAllLibrariesComponent implements OnInit {
  libraries: Library[] = [];

  constructor(private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.libraryService.getAllLibraries().subscribe((body) => {
      this.libraries = body;
      console.log("Get all libraries");
    })
  }

  onBack(): void {
    this.router.navigate(['/library']);
  }
}
