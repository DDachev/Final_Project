import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorService } from 'src/app/service/visitor.service';
import { Visitor } from '../visitor.model';

@Component({
  selector: 'app-get-visitor-by-id',
  templateUrl: './get-visitor-by-id.component.html',
  styleUrls: ['./get-visitor-by-id.component.css']
})
export class GetVisitorByIdComponent implements OnInit {
  visitor:Visitor = {};
  isClickedGet:boolean = false;


  constructor(private visitorService:VisitorService, private router:Router) { }

  ngOnInit(): void {
  }

  getVisitorById() {
    this.visitorService.getVisitorById(this.visitor.id).subscribe((body) => {
      this.visitor = body;
      this.isClickedGet = true;
    });
  }

  onBack(): void {
    this.router.navigate(['/library/visitor']);
  }

}
