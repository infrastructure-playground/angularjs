import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegistrationComponent} from './auth/registration/registration.component';
import {LoginComponent} from './auth/login/login.component';
import {LogoutComponent} from './auth/logout/logout.component';
import {InventoryComponent} from './inventory/inventory.component';
import {BooksComponent} from './inventory/books/books.component';
import {AuthGuard, LoginGuard} from './auth-guard-service';
import {BookCreateComponent} from './inventory/books/book-create/book-create.component';
import {BookListComponent} from './inventory/books/book-list/book-list.component';
import {BookRetrieveComponent} from './inventory/books/book-retrieve/book-retrieve.component';
import {BookUpdateComponent} from './inventory/books/book-update/book-update.component';
import {BookDeleteComponent} from './inventory/books/book-delete/book-delete.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent},
  { path: 'register', canActivate: [LoginGuard], component: RegistrationComponent },
  { path: 'logout', canActivate: [AuthGuard], component: LogoutComponent},
  { path: 'inventory', canActivate: [AuthGuard], canActivateChild: [AuthGuard], component: InventoryComponent, children: [
      { path: 'books', component: BooksComponent, children: [
          { path: '', component: BookListComponent },
          { path: 'add', component: BookCreateComponent },
          { path: ':id', component: BookRetrieveComponent },
          { path: 'update/:id', component: BookUpdateComponent },
          { path: 'delete/:id', component: BookDeleteComponent }
        ] },
  ] },
  // TODO { path: 'page-not-found'},
  // TODO { '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
