import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private readonly baseURL: string;
  addressIdSource = new BehaviorSubject<number>(0);
  addressIdData: any;

  constructor(private http: HttpClient) { 
    this.baseURL = "http://localhost:60460/api/addressBook/";
    this.addressIdData = this.addressIdSource.asObservable();
  }

  searchAddressBook(searchText: any){
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.get(this.baseURL + "searchAddressBook?search="+searchText, {headers: header})
  }

  getAddressBookList(){
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.get(this.baseURL + "getAddressBooks", {headers: header})
  }

  addAddressBook(address: any){
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.post(this.baseURL + "addAddressBook", address, {headers: header})
  }

  updateAddressBook(address: any){
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.put(this.baseURL + "updateAddressBook", address, {headers: header})
  }

  deleteAddressBook(addressId: number){
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.post(this.baseURL + "deleteAddressBook?addressId="+addressId, {headers: header})
  }

  getAddressBook(addressId: number){
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.get(this.baseURL + "getAddressBook?addressId="+addressId, {headers: header})
  }

  changeAddressBook(addressId: number){
    this.addressIdSource.next(addressId);
  }
}
