import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
