import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-delete-address-book',
  templateUrl: './delete-address-book.component.html',
  styleUrls: ['./delete-address-book.component.css']
})
export class DeleteAddressBookComponent implements OnInit {
  addressBookId: number;
  event: EventEmitter<any> = new EventEmitter();
  
  constructor(private bsModalRef: BsModalRef, private addressBookService: AddressBookService) {

  }

  deleteAddressBook(addressBookId: number) {
    this.addressBookService.deleteAddressBook(addressBookId).subscribe();
    this.event.emit('OK');
    this.bsModalRef.hide();
  }

  onClose() {
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }
}
