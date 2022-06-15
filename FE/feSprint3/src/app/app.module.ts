import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailBooksComponent } from './detail-books/detail-books.component';
import { CartComponent } from './cart/cart.component';
import { InformationComponent } from './information/information.component';
import { ContactComponent } from './contact/contact.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailBooksComponent,
    CartComponent,
    InformationComponent,
    ContactComponent,
    StoreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
