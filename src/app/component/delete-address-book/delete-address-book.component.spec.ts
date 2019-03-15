import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAddressBookComponent } from './delete-address-book.component';

describe('DeleteAddressBookComponent', () => {
  let component: DeleteAddressBookComponent;
  let fixture: ComponentFixture<DeleteAddressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAddressBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
