import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/library-object/library.model';
import { Visitor } from '../visitor.model';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';
import { VisitorService } from 'src/app/service/visitor.service';

@Component({
  selector: 'app-delete-visitor',
  templateUrl: './delete-visitor.component.html',
  styleUrls: ['./delete-visitor.component.css']
})
export class DeleteVisitorComponent implements OnInit {
  visitor:Visitor = {};
  visitors:Visitor [] = [];
  libraries:Library [] = [];
  libraryId:number;
  visitorId:number;
  isClickedDelete:boolean = false;


  constructor(private visitorService:VisitorService, private libraryService:LibraryService, private router:Router) { }

  ngOnInit(): void {
  }

  delete(){
    this.visitorService.deleteVisitor(this.visitor.id);
    this.isClickedDelete = true;
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
    this.visitor.id=id;
  }

  onBack(): void {
    this.router.navigate(['/library/visitor']);
  }

}
