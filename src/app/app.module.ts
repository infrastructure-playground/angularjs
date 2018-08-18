import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {AuthService} from './auth/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserComponent } from './auth/user/user.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { InventoryComponent } from './inventory/inventory.component';
import {BooksComponent} from './inventory/books/books.component';
import {AuthGuard, LoginGuard} from './auth-guard-service';
import {AuthInterceptor} from './auth.interceptor';
import {AuthExpiredInterceptor} from './auth-expired.interceptor';
import { BookCreateComponent } from './inventory/books/book-create/book-create.component';
import { BookListComponent } from './inventory/books/book-list/book-list.component';
import { BookRetrieveComponent } from './inventory/books/book-retrieve/book-retrieve.component';
import { BookUpdateComponent } from './inventory/books/book-update/book-update.component';
import { BookDeleteComponent } from './inventory/books/book-delete/book-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent,
    LogoutComponent,
    BooksComponent,
    InventoryComponent,
    BookCreateComponent,
    BookListComponent,
    BookRetrieveComponent,
    BookUpdateComponent,
    BookDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoginGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthExpiredInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
