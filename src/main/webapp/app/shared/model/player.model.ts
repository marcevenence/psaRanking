import { IRoster } from 'app/shared/model/roster.model';
import { ProfileUser } from 'app/shared/model/enumerations/profile-user.model';

export interface IPlayer {
  id?: number;
  profile?: ProfileUser;
  captainFlag?: boolean;
  personId?: number;
  rosters?: IRoster[];
}

export class Player implements IPlayer {
  constructor(
    public id?: number,
    public profile?: ProfileUser,
    public captainFlag?: boolean,
    public personId?: number,
    public rosters?: IRoster[]
  ) {
    this.captainFlag = this.captainFlag || false;
  }
}
