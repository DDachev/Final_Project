import { Address } from '../address/address.model';

export interface Library{
    id?: number,
    name?: string,
    yearOfConstruction?: number,
    address?:Address
}