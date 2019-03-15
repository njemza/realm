import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AddressBookService } from 'src/app/services/address-book.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-address-book',
  templateUrl: './edit-address-book.component.html',
  styleUrls: ['./edit-address-book.component.css']
})
export class EditAddressBookComponent implements OnInit {

  editAddressBookForm: FormGroup;
  addressId: number;
  addressData: any;
  event: EventEmitter<any> = new EventEmitter();

  constructor(private builder: FormBuilder, private addressBookService: AddressBookService, private bsModalRef: BsModalRef) {
    this.editAddressBookForm = this.builder.group({
      firstName: new FormControl('', []),
      lastName: new FormControl('', []),
      mobileNumber: new FormControl('', []),
      homeNumber: new FormControl('', []),
      officeNumber: new FormControl('', []),
      emailAddress: new FormControl('', [])
    });

    this.addressBookService.addressIdData.subscribe(data => {
      this.addressId = data;
      if (this.addressId !== undefined) {
        this.addressBookService.getAddressBook(this.addressId).subscribe(data => {
          this.addressData = data;
          
          if (this.editAddressBookForm!=null && this.addressData!=null) {
            this.editAddressBookForm.controls['firstName'].setValue(this.addressData.firstName);
            this.editAddressBookForm.controls['lastName'].setValue(this.addressData.lastName);
            this.editAddressBookForm.controls['mobileNumber'].setValue(this.addressData.mobileNumber);
            this.editAddressBookForm.controls['homeNumber'].setValue(this.addressData.homeNumber);
            this.editAddressBookForm.controls['officeNumber'].setValue(this.addressData.officeNumber);
            this.editAddressBookForm.controls['emailAddress'].setValue(this.addressData.emailAddress);
          }
        }, error => { console.log("Error while gettig address book details") });
      }
    });
  }

  onAddressBookEditFormSubmit() {
    let addressBookData = {
      'AddressBookId': this.addressId,
      'FirstName': this.editAddressBookForm.get('firstName').value,
      'LastName': this.editAddressBookForm.get('lastName').value,
      'MobileNumber': this.editAddressBookForm.get('mobileNumber').value,
      'HomeNumber': this.editAddressBookForm.get('homeNumber').value,
      'OfficeNumber': this.editAddressBookForm.get('officeNumber').value,
      'EmailAddress': this.editAddressBookForm.get('emailAddress').value,
    };

    this.addressBookService.updateAddressBook(addressBookData).subscribe(data => {      
        this.event.emit('OK');
        this.bsModalRef.hide();      
    });
  }

  onClose() {
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }
}
