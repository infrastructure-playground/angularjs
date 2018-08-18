import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  constructor(private bookService: BooksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.bookService.deleteBook(params['id'])
            .subscribe(
              (response: Response) => {
                this.router.navigate(['../']);
              },
              (error: Error) => {
                console.log(error);
              }
            );
        }
      );
  }

}
