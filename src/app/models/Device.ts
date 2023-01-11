import {AccountUser} from "./AccountUser";
import {Measurement} from "./Measurement";

export class Device
{
  id: number;
  location?: string;
  description?: string;
  maximumconsumption?: number;
  measurements: Measurement[];
}
