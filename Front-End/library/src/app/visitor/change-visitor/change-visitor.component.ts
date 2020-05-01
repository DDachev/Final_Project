import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/library-object/library.model';
import { Visitor } from '../visitor.model';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';
import { VisitorService } from 'src/app/service/visitor.service';

@Component({
  selector: 'app-change-visitor',
  templateUrl: './change-visitor.component.html',
  styleUrls: ['./change-visitor.component.css']
})
export class ChangeVisitorComponent implements OnInit {
visitor:Visitor = {};
visitors:Visitor [] = [];
libraries:Library [] = [];
libraryId:number;
visitorId:number;
panelOpenState:boolean = false;

  constructor(private visitorService:VisitorService, private libraryService:LibraryService, private router:Router) { }

  ngOnInit(): void {
  }

  change(){
    this.visitorService.changeVisitor(this.libraryId, this.visitor);
  }

  getAllVisitorsFromLibrary() {
    this.visitorService.getAllVisitorsFromLibrary(this.libraryId).subscribe((body)=>{
      this.visitors=body;
    })
  }

  getAllLibraries(){
    this.libraryService.getAllLibraries().subscribe((body)=>{
      this.libraries= body;
    })
  }

  addLibraryId(id:number){
    this.libraryId=id;
  }

  addVisitorId(id:number){
    this.visitorId=id;
  }

  onBack(): void {
    this.router.navigate(['/library/visitor']);
  }

}
