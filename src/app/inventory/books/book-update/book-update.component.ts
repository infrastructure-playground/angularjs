import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Book} from '../books.model';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  @ViewChild('f') ngform: NgForm;
  id: number;

  constructor(private bookService: BooksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.bookService.getBook(this.id)
            .subscribe(
              (response: Book) => {
                this.ngform.form.patchValue(response);
              }
            );
        }
      );
  }

  onUpdateBook(form: NgForm) {
    this.bookService.updateBook(form.value, this.id)
      .subscribe(
        (response: Response) => {
          this.router.navigate(['../']);
        }
      );
  }

}
