import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookService } from 'src/app/services/address-book.service';
import { AddAddressBookComponent } from './component/add-address-book/add-address-book.component';
import { EditAddressBookComponent } from './component/edit-address-book/edit-address-book.component';
import { DeleteAddressBookComponent } from './component/delete-address-book/delete-address-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressBookComponent,
    EditAddressBookComponent,
    DeleteAddressBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [AddressBookService, BsModalService],
  bootstrap: [AppComponent],
  entryComponents: [AddAddressBookComponent, DeleteAddressBookComponent, EditAddressBookComponent]
})
export class AppModule { }
