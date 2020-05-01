import { Component, OnInit } from '@angular/core';
import { Library } from '../library.model';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-library',
  templateUrl: './delete-library.component.html',
  styleUrls: ['./delete-library.component.css']
})
export class DeleteLibraryComponent implements OnInit {
  library: Library = {};
  libraries:Library [] = [];
  panelOpenState = false;
  isDeleted:boolean = false;

  constructor(private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
  }

  delete(){
    this.libraryService.deleteLibrary(this.library.id);
    this.isDeleted = true;
  }

  getAll() {
    this.libraryService.getAllLibraries().subscribe((body) => {
      this.libraries = body;
    })
  }

  onBack(): void {
    this.router.navigate(['/library']);
  }
}
