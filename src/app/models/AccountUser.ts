import {Device} from "./Device";

export class AccountUser
{
  id?: number;
  username?: string;
  password?: string;
  role?: string;
  devices?: Device[];
}
