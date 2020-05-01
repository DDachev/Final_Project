import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/service/address.service';
import { Router } from '@angular/router';
import { Address } from '../address.model';

@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.component.html',
  styleUrls: ['./get-address.component.css']
})

export class GetAddressComponent implements OnInit {
  address: Address = {};
  isGet: boolean = false;

  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
  }

  get() {
    this.addressService.getAddressById(this.address.id).subscribe((body) => {
      this.address = body;
      this.isGet = true;
    })
  }

  onBack(): void {
    this.router.navigate(['/library/address']);
  }
}
