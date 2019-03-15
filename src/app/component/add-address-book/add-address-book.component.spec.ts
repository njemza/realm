import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressBookComponent } from './add-address-book.component';

describe('AddAddressBookComponent', () => {
  let component: AddAddressBookComponent;
  let fixture: ComponentFixture<AddAddressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddressBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
