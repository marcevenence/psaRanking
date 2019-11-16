import { ICity } from 'app/shared/model/city.model';

export interface ILocation {
  id?: number;
  name?: string;
  cities?: ICity[];
  provinceId?: number;
}

export class Location implements ILocation {
  constructor(public id?: number, public name?: string, public cities?: ICity[], public provinceId?: number) {}
}
