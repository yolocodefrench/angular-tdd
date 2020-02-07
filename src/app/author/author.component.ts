import { Component, OnInit } from '@angular/core';
import { Document } from 'ngx-jsonapi/document';
import { AuthorsService, Author } from '../authors/authors.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Book, BooksService } from '../books/books.service';
import { DocumentCollection } from 'ngx-jsonapi';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.sass']
})
export class AuthorComponent implements OnInit {

  public author: Author;
  public books: DocumentCollection<Book>;
  public idAuthor: string
  private routeSub: Subscription;
  
  constructor(
    private authorsService: AuthorsService,
    private route: ActivatedRoute) {
   }
   
   public getOneAuthor(): void{
    this.authorsService
      .get(
        this.idAuthor,
        {include:['books','photos']} 
      )
      .subscribe(author => {
        this.author = author
        console.log(author)
      },
      error => console.error('Could not load author :(', error));
  }

  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params => {
      this.idAuthor=params['id']
    });
    this.getOneAuthor();
  }
}
