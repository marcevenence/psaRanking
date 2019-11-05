export interface IAddress {
  id?: number;
  street?: string;
  zipCode?: string;
  cityId?: number;
}

export class Address implements IAddress {
  constructor(public id?: number, public street?: string, public zipCode?: string, public cityId?: number) {}
}
