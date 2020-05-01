import { Component, OnInit } from '@angular/core';
import { VisitorService } from 'src/app/service/visitor.service';
import { Router } from '@angular/router';
import { Visitor } from '../visitor.model';

@Component({
  selector: 'app-get-all-visitors',
  templateUrl: './get-all-visitors.component.html',
  styleUrls: ['./get-all-visitors.component.css']
})
export class GetAllVisitorsComponent implements OnInit {
  visitors:Visitor [] = [];
  libraryId:number;
  isClickedGet:boolean = false;

  constructor(private visitorService:VisitorService, private router:Router) { }

  ngOnInit(): void {
  }

  getAllVisitorsFromLibrary() {
    this.visitorService.getAllVisitorsFromLibrary(this.libraryId).subscribe((body)=>{
      this.visitors=body;
      this.isClickedGet = true;
    })
  }

  addLibraryId(id:number){
    this.libraryId=id;
  }

  onBack(): void {
    this.router.navigate(['/library/visitor']);
  }

}
