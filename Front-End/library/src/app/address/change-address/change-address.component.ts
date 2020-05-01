import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/service/address.service';
import { Router } from '@angular/router';
import { Address } from '../address.model';

@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.css']
})

export class ChangeAddressComponent implements OnInit {
  address: Address = {};
  addresses: Address[] = [];

  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
  }

  change() {
    this.addressService.changeAddress(this.address);
  }

  getAll() {
    this.addressService.getAllAddresses().subscribe((body) => {
      this.addresses = body;
    })
  }

  addAddressId(id: number) {
    this.address.id = id;
  }

  onBack(): void {
    this.router.navigate(['/library/address']);
  }

}
