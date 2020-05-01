import { Injectable } from '@angular/core';
import { Library } from '../library-object/library.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  public addLibrary(library: Library) {
    this.http.post<Library>('/server/library', library).subscribe(() => {
      console.log("Add library");
    })
  }

  public getLibraryById(id: number) {
    return this.http.get<Library>(`/server/library/${id}`);
  }

  public getLibraryByName(name: string) {
    return this.http.get<Library>(`/server/library/name/${name}`);
  }

  public getAllLibraries() {
    return this.http.get<Library[]>('/server/libraries');
  }

  public deleteLibrary(id: number) {
    this.http.delete<Library>(`/server/library/${id}`).subscribe(() => {
      console.log("Delete library");
    })
  }

}
