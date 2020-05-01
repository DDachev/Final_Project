import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/service/library.service';
import { Router } from '@angular/router';
import { VisitorService } from 'src/app/service/visitor.service';
import { Library } from 'src/app/library-object/library.model';
import { Visitor } from '../visitor.model';

@Component({
  selector: 'app-get-visitor-by-age',
  templateUrl: './get-visitor-by-age.component.html',
  styleUrls: ['./get-visitor-by-age.component.css']
})
export class GetVisitorByAgeComponent implements OnInit {
  visitor:Visitor = {};
  visitors:Visitor [] = [];
  libraries:Library [] = [];
  libraryId:number;
  isClickedGet:boolean = false;


  constructor(private visitorService:VisitorService, private libraryService:LibraryService, private router:Router) { }

  ngOnInit(): void {
  }

  getVisitorsByAge() {
    this.visitorService.getVisitorsByAge(this.visitor.age).subscribe((body) => {
      this.visitors = body;
      this.isClickedGet = true;
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

  onBack(): void {
    this.router.navigate(['/library/visitor']);
  }

}
