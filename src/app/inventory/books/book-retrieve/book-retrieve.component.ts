import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Book} from '../books.model';

@Component({
  selector: 'app-book-retrieve',
  templateUrl: './book-retrieve.component.html',
  styleUrls: ['./book-retrieve.component.css']
})
export class BookRetrieveComponent implements OnInit {
  book: Book;

  constructor(private bookService: BooksService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.bookService.getBook(params['id'])
            .subscribe(
              (response: Book) => {
                this.book = response;
              }
            );
        }
      )
  }
}
