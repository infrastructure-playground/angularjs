import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Book} from './books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public books: Book[];

  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(environment.host + '/v1/inventory/books/');
  }

  addBook(value: Book) {
    return this.httpClient.post(environment.host + '/v1/inventory/books/', value);
  }

  getBook(id: number) {
    return this.httpClient.get(environment.host + '/v1/inventory/books/' + id + '/');
  }

  updateBook(value: Book, id: number) {
    return this.httpClient.put(environment.host + '/v1/inventory/books/' + id + '/', value);
  }

  deleteBook(id: number) {
    return this.httpClient.delete(environment.host + '/v1/inventory/books/' + id + '/');
  }
}
