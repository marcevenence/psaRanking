import { ILocation } from 'app/shared/model/location.model';

export interface IProvince {
  id?: number;
  name?: string;
  locations?: ILocation[];
  countryId?: number;
}

export class Province implements IProvince {
  constructor(public id?: number, public name?: string, public locations?: ILocation[], public countryId?: number) {}
}
