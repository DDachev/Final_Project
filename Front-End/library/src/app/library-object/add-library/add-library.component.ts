import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Library } from '../library.model';
import { LibraryService } from 'src/app/service/library.service';
import { Address } from 'src/app/address/address.model';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent implements OnInit {
  library: Library = {};
  address: Address = {};
  panelOpenState = false;

  constructor(private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.library.address = this.address;
    this.libraryService.addLibrary(this.library);
  }

  onBack(): void {
    this.router.navigate(['/library']);
  }
}
