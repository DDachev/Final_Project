import { Component, OnInit } from '@angular/core';
import { Visitor } from '../visitor.model';
import { VisitorService } from 'src/app/service/visitor.service';
import { Router } from '@angular/router';
import { Library } from 'src/app/library-object/library.model';
import { LibraryService } from 'src/app/service/library.service';
import { BookService } from 'src/app/service/book.service';
import { Book } from 'src/app/book/book.model';

@Component({
  selector: 'app-add-book-to-visitor',
  templateUrl: './add-book-to-visitor.component.html',
  styleUrls: ['./add-book-to-visitor.component.css']
})
export class AddBookToVisitorComponent implements OnInit {
  visitor:Visitor = {};
  visitors:Visitor [] = [];
  libraries:Library [] = [];
  books:Book [] = [];
  libraryId:number;
  bookId:number;

  constructor(private visitorService:VisitorService, private libraryService:LibraryService, private bookService:BookService, private router:Router) { }

  ngOnInit(): void {
  }

  addBook() {
    this.visitorService.addBookToVisitorToReadIt(this.visitor.id, this.bookId);
  }

  getAllLibraries(){
    this.libraryService.getAllLibraries().subscribe((body)=>{
      this.libraries= body;
    })
  }

  getAllVisitorsFromLibrary() {
    this.visitorService.getAllVisitorsFromLibrary(this.libraryId).subscribe((body)=>{
      this.visitors=body;
    })
  }

  getAllBooks(){
    this.bookService.getAllBooks(this.libraryId).subscribe((body)=>{
      this.books=body;
    })
  }

  addLibraryId(id:number){
    this.libraryId=id;
  }

  addVisitorId(id:number){
    this.visitor.id=id;
  }

  addBookId(id:number){
    this.bookId=id;
  }

  onBack(): void {
    this.router.navigate(['/library/visitor']);
  }

}
