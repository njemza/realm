import { Component } from '@angular/core';
import { AddressBookService } from 'src/app/services/address-book.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AddAddressBookComponent } from './component/add-address-book/add-address-book.component';
import { DeleteAddressBookComponent } from './component/delete-address-book/delete-address-book.component';
import { EditAddressBookComponent } from './component/edit-address-book/edit-address-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mbiza Address Book';
  searchText: string;
  addressBookList: any[] = [];
  bsModalRef: BsModalRef;
  // searchAddressBookForm: FormGroup;

  constructor(private addressBookService: AddressBookService, private bsModalService: BsModalService) {
    this.getAddressBooks();
  }

  // onSearchAddressBookFormSubmit(){
  //   this.addressBookService.searchAddressBook(this.searchAddressBookForm.get('searchText').value).subscribe(data => {
  //     Object.assign(this.addressBookList, data);
  //   }, error => {
  //     console.log("Error while getting address books", error);
  //   });
  // }

  searchAddressBook(searchText: string){
    this.addressBookService.searchAddressBook(searchText).subscribe(data => {
      Object.assign(this.addressBookList, data);
    }, error => {
      console.log("Error while getting address books", error);
    });
  }

  getAddressBooks() {
    this.addressBookService.getAddressBookList().subscribe(data => {
      Object.assign(this.addressBookList, data);
    }, error => {
      console.log("Error while getting address books", error);
    });
  }

  addAddressBook() {
    this.bsModalRef = this.bsModalService.show(AddAddressBookComponent);
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        this.getAddressBooks();
      }
    });
  }

  deleteAddressBook(addressId: number, name: string) {
    this.bsModalRef = this.bsModalService.show(DeleteAddressBookComponent);
    this.bsModalRef.content.addressId = addressId;
    this.bsModalRef.content.name = name;
    this.bsModalRef.content.event.subscribe(result => {
      console.log("deleted", result);
      if (result == 'OK') {
        setTimeout(() => {
          this.addressBookList=[];
          this.getAddressBooks();
        }, 5000);
      }
    });
  }

  editAddressBook(addressId: number) {
    this.addressBookService.changeAddressBook(addressId);

    this.bsModalRef = this.bsModalService.show(EditAddressBookComponent);
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        setTimeout(() => {
          this.getAddressBooks();
        }, 5000);
      }
    });
  }
}
