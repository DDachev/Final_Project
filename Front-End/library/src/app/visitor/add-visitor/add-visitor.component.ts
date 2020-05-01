import { Component, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/service/visitor.service';
import { Router } from '@angular/router';
import { LibraryService } from 'src/app/service/library.service';
import { Visitor } from '../visitor.model';
import { Library } from 'src/app/library-object/library.model';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {
visitor:Visitor = {};
libraries:Library [] = [];
libraryId:number;

  constructor(private visitorService:VisitorService, private libraryService:LibraryService, private router:Router) { }

  ngOnInit(): void {
  }

  add() {
    this.visitorService.addVisitor(this.libraryId, this.visitor);
  }

  getAllLibraries(){
    this.libraryService.getAllLibraries().subscribe((body)=>{
      this.libraries= body;
    })
  }

  addLibraryId(id:number){
    this.libraryId=id;
  }

  onBack(): void {
    this.router.navigate(['/library/visitor']);
  }

}
