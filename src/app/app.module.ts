import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { PhotosComponent } from './photos/photos.component';
import { AuthorsService } from './authors/authors.service';
import { BooksService } from './books/books.service';
import { PhotosService } from './photos/photos.service';

const routes: Routes = [
    { path: 'authors', component: AuthorsComponent },
    { path: 'books', component: BooksComponent },
    { path: 'photos', component: PhotosComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxJsonapiModule.forRoot({
      url: '//jsonapiplayground.reyesoft.com/v2/'
  })
  ],
  providers: [
    AuthorsService,
    BooksService,
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
