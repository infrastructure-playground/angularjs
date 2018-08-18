import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {Book} from '../books.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BooksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe(
        (response: Book[]) => {
          console.log(response);
          this.books = response;
        },
        (error: Error) => {
          console.log(error);
        }
      );
  }

  onGetBook(id: number) {
    this.router.navigate([id], {relativeTo: this.route.parent});
  }

  onUpdateBook(id: number) {
    this.router.navigate(['update', id], {relativeTo: this.route.parent, skipLocationChange: true});
  }

  onDeleteBook(id: number) {
    this.router.navigate(['delete', id], {relativeTo: this.route.parent, skipLocationChange: true});
  }
}
