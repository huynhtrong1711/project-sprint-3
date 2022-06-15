import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InformationComponent} from './information/information.component';
import {ContactComponent} from './contact/contact.component';
import {StoreComponent} from './store/store.component';
import {DetailBooksComponent} from './detail-books/detail-books.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'information', component: InformationComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'store', component: StoreComponent},
  {path : 'detailBook', component: DetailBooksComponent},
  {path : 'cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
