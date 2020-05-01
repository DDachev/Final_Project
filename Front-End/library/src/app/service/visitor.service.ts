import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visitor } from '../visitor/visitor.model';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  visitor: Visitor = {};


  constructor(private http: HttpClient) { }

  public addVisitor(id: number, visitor: Visitor) {
    this.http.post<Visitor>(`/server/visitor/library/${id}`, visitor)
      .subscribe((body) => {
        console.log("Add visitor");
      });
  }

  public changeVisitor(id: number, visitor: Visitor) {
    this.http.post<Visitor>(`/server/visitor/library/${id}`, visitor)
      .subscribe((body) => {
        console.log("Change visitor");
      });
  }

  public addBookToVisitorToReadIt(idVisitor: number, idBook: number) {
    this.http.patch<void>(`/server/visitor/${idVisitor}/book/${idBook}`, null)
      .subscribe((body) => {
        console.log("Get all visitors");
      })
  }

  public getVisitorById(id: number) {
    return this.http.get<Visitor>(`server/visitor/${id}`);
  }

  public getVisitorsByAge(age: number) {
    return this.http.get<Visitor[]>(`server/visitor/age/${age}`);
  }

  public getAllVisitorsFromLibrary(id: number) {
    return this.http.get<Visitor[]>(`/server/visitors/${id}`);
  }

  public deleteVisitor(id: number) {
    this.http.delete<Visitor>(`/server/visitor/${id}`).subscribe((body) => {
      console.log("Delete visitor");
    });
  }

}
