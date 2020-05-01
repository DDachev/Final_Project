import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { VisitorComponent } from './visitor/visitor.component';
import { BookComponent } from './book/book.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { LibraryObjectComponent } from './library-object/library-object.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { AddLibraryComponent } from './library-object/add-library/add-library.component';
import { GetAllLibrariesComponent } from './library-object/get-all-libraries/get-all-libraries.component';
import { DeleteLibraryComponent } from './library-object/delete-library/delete-library.component';
import { ChangeAddressComponent } from './address/change-address/change-address.component';
import { GetAddressComponent } from './address/get-address/get-address.component';
import { GetAllAddressesComponent } from './address/get-all-addresses/get-all-addresses.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { GetBookByNameComponent } from './book/get-book-by-name/get-book-by-name.component';
import { GetBookByIdComponent } from './book/get-book-by-id/get-book-by-id.component';
import { GetAllBooksComponent } from './book/get-all-books/get-all-books.component';
import { ChangeBookComponent } from './book/change-book/change-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { GetBookinfoByIdComponent } from './book-info/get-bookinfo-by-id/get-bookinfo-by-id.component';
import { GetBookinfoByGenreComponent } from './book-info/get-bookinfo-by-genre/get-bookinfo-by-genre.component';
import { GetBookinfoByAuthorComponent } from './book-info/get-bookinfo-by-author/get-bookinfo-by-author.component';
import { AddVisitorComponent } from './visitor/add-visitor/add-visitor.component';
import { ChangeVisitorComponent } from './visitor/change-visitor/change-visitor.component';
import { AddBookToVisitorComponent } from './visitor/add-book-to-visitor/add-book-to-visitor.component';
import { GetVisitorByIdComponent } from './visitor/get-visitor-by-id/get-visitor-by-id.component';
import { GetVisitorByAgeComponent } from './visitor/get-visitor-by-age/get-visitor-by-age.component';
import { GetAllVisitorsComponent } from './visitor/get-all-visitors/get-all-visitors.component';
import { DeleteVisitorComponent } from './visitor/delete-visitor/delete-visitor.component';
import { GetLibraryByIdComponent } from './library-object/get-library-by-id/get-library-by-id.component';
import { GetLibraryByNameComponent } from './library-object/get-library-by-name/get-library-by-name.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    VisitorComponent,
    BookComponent,
    BookInfoComponent,
    LibraryObjectComponent,
    AddLibraryComponent,
    GetAllLibrariesComponent,
    DeleteLibraryComponent,
    ChangeAddressComponent,
    GetAddressComponent,
    GetAllAddressesComponent,
    AddBookComponent,
    GetBookByNameComponent,
    GetBookByIdComponent,
    GetAllBooksComponent,
    ChangeBookComponent,
    DeleteBookComponent,
    GetBookinfoByIdComponent,
    GetBookinfoByGenreComponent,
    GetBookinfoByAuthorComponent,
    AddVisitorComponent,
    ChangeVisitorComponent,
    AddBookToVisitorComponent,
    GetVisitorByIdComponent,
    GetVisitorByAgeComponent,
    GetAllVisitorsComponent,
    DeleteVisitorComponent,
    GetLibraryByIdComponent,
    GetLibraryByNameComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'library', component: LibraryObjectComponent},
      {path:'library/add-library', component: AddLibraryComponent},
      {path:'library/get-all-libraries', component: GetAllLibrariesComponent},
      {path:'library/get-library-by-id', component: GetLibraryByIdComponent},
      {path:'library/get-library-by-name', component: GetLibraryByNameComponent},
      {path:'library/delete-library', component: DeleteLibraryComponent},
      {path:'library/address', component: AddressComponent},
      {path:'library/address/change-address', component: ChangeAddressComponent},
      {path:'library/address/get-address', component: GetAddressComponent},
      {path:'library/address/get-all-addresses', component: GetAllAddressesComponent},
      {path:'library/book', component: BookComponent},
      {path:'library/book/add-book', component: AddBookComponent},
      {path:'library/book/get-book-by-name', component: GetBookByNameComponent},
      {path:'library/book/get-book-by-id', component: GetBookByIdComponent},
      {path:'library/book/get-all-books', component: GetAllBooksComponent},
      {path:'library/book/change-book', component: ChangeBookComponent},
      {path:'library/book/delete-book', component: DeleteBookComponent},
      {path:'library/bookinfo', component: BookInfoComponent},
      {path:'library/bookinfo/get-bookinfo-by-id', component: GetBookinfoByIdComponent},
      {path:'library/bookinfo/get-bookinfo-by-genre', component: GetBookinfoByGenreComponent},
      {path:'library/bookinfo/get-bookinfo-by-author', component: GetBookinfoByAuthorComponent},
      {path:'library/visitor', component: VisitorComponent},
      {path:'library/visitor/add-visitor', component: AddVisitorComponent},
      {path:'library/visitor/change-visitor', component: ChangeVisitorComponent},
      {path:'library/visitor/add-book-to-visitor', component: AddBookToVisitorComponent},
      {path:'library/visitor/get-visitor-by-id', component: GetVisitorByIdComponent},
      {path:'library/visitor/get-visitor-by-age', component: GetVisitorByAgeComponent},
      {path:'library/visitor/get-all-visitors', component: GetAllVisitorsComponent},
      {path:'library/visitor/delete-visitor', component: DeleteVisitorComponent},
      
    ]),
    MatMenuModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    NgbModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
