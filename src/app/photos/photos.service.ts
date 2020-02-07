import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';
import { Author } from '../authors/authors.service'
import { Book } from '../books/books.service';


export class Photo extends Resource {
    public attributes = {
        id: ''
    };
    public relationships = {
        author: new DocumentCollection<Author>()
    };
}

@Injectable()
export class PhotosService extends Service<Photo> {
    constructor(){
        super()
        this.register()
    }
    public resource = Photo;
    public type = 'photos';
}