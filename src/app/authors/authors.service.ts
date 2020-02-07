import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';
import { Book, BooksService } from '../books/books.service'
import { Photo, PhotosService } from '../photos/photos.service';

export class Author extends Resource {
    public attributes = {
        id: '',
        name: '',
        birthplace: '',
        date_of_birth: '',
        date_of_death: ''
    };
    
    public relationships = {
        books: new DocumentCollection<Book>(),
        photos: new DocumentCollection<Photo>()
    };
}

@Injectable()
export class AuthorsService extends Service<Author> {
    constructor(){
        super();
        new BooksService();
        new PhotosService();
        this.register()
    }
    public resource = Author;
    public type = 'authors';
}