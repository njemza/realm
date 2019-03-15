import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AddressBookService } from 'src/app/services/address-book.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-address-book',
  templateUrl: './add-address-book.component.html',
  styleUrls: ['./add-address-book.component.css']
})
export class AddAddressBookComponent implements OnInit {
  addAddressBookForm: FormGroup;
  address: any[] = [];
  event: EventEmitter<any> = new EventEmitter();

  constructor(private builder: FormBuilder, private addressBookService: AddressBookService, private bsModalRef: BsModalRef) {
    this.addAddressBookForm = this.builder.group({
      firstName: new FormControl('', []),
      lastName: new FormControl('', []),
      mobileNumber: new FormControl('', []),
      homeNumber: new FormControl('', []),
      officeNumber: new FormControl('', []),
      emailAddress: new FormControl('', [])
    });
  }

  onAddressBookFormSubmit(){
    let addressBookData = {
      'FirstName': this.addAddressBookForm.get('firstName').value,
      'LastName': this.addAddressBookForm.get('lastName').value,
      'MobileNumber': this.addAddressBookForm.get('mobileNumber').value,
      'HomeNumber': this.addAddressBookForm.get('homeNumber').value,
      'OfficeNumber': this.addAddressBookForm.get('officeNumber').value,
      'EmailAddress': this.addAddressBookForm.get('emailAddress').value
    };
  
    this.addressBookService.addAddressBook(addressBookData).subscribe(data=>{
      console.log(data);
      if(data!=null && data>0){
        this.event.emit('OK');
        this.bsModalRef.hide();
      }
    });
  }

  onClose(){
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }
}
