import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Device} from "../models/Device";
import {Measurement} from "../models/Measurement";

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  private API_SERVER_URL='http://localhost:8090/api/measurements';

  constructor(private httpClient: HttpClient) { }

  getMeasurementsByDate(date: string): Observable<Measurement[]>
  {
    return this.httpClient.get<Measurement[]>(`${this.API_SERVER_URL}/byDate/${date}`);
  }

}
