import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../address/address.model';

@Injectable({
  providedIn: 'root'
})

export class AddressService {

  constructor(private http: HttpClient) { }

  public changeAddress(address: Address) {
    this.http.put<Address>(`/server/address`, address).subscribe(() => {
      console.log("Change address");
    });
  }

  public getAddressById(id: number) {
    return this.http.get<Address>(`server/address/${id}`);
  }

  public getAllAddresses() {
    return this.http.get<Address[]>(`server/addresses`);
  }
}
