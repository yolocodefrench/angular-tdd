import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentCollection } from 'ngx-jsonapi';
import { AuthorsService, Author } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass'],
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit{

  public authors: DocumentCollection<Author>;
  public idAuthor: Number;

  public constructor(private authorsService: AuthorsService) {
    this.getData()
  }

  public getData(): void{
    this.authorsService
      .all({
        // include: ['books', 'photos'],
      })
      .subscribe(authors => {
        this.authors = authors
      },
      error => console.error('Could not load authors :(', error));
  }

  ngOnInit(){
    
  }
}
