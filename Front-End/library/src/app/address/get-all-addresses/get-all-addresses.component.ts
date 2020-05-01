import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/service/address.service';
import { Router } from '@angular/router';
import { Address } from '../address.model';


@Component({
  selector: 'app-get-all-addresses',
  templateUrl: './get-all-addresses.component.html',
  styleUrls: ['./get-all-addresses.component.css']
})
export class GetAllAddressesComponent implements OnInit {
  addresses: Address[] = [];

  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.addressService.getAllAddresses().subscribe((body) => {
      this.addresses = body;
    })
  }

  onBack(): void {
    this.router.navigate(['/library/address']);
  }

}
