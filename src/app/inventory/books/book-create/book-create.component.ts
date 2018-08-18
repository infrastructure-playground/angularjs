import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {BooksService} from '../books.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit() {
  }

  onAddBook(form: NgForm) {
    this.booksService.addBook(form.value)
      .subscribe(
        (response: Response) => {
          this.router.navigate(['../']);
        },
        (error: Error) => {
          console.log(error);
        }
      );
  }

}
