import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';
import { Author } from '../authors/authors.service'
import { Photo } from '../photos/photos.service';


export class Book extends Resource {
    public attributes = {
        id: ''
    };
}

@Injectable()
@Autoregister()
export class BooksService extends Service<Book> {
    public resource = Book;
    public type = 'books';
}