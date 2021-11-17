import { Injectable } from '@angular/core';

/* Http */
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* RxJs */
import { Observable} from 'rxjs';
import { timeout } from 'rxjs/operators';

/* Interface */
import { Client } from '../../models/response/clients/Clients';

/* Constant */
import { TIME_OUT , SLASH} from 'src/app/portal/utils/ConstantsApp';
import { environment } from 'src/environments/environment';
import * as ServiceConst from '../../../portal/utils/ConstantsService';


@Injectable({
  providedIn: 'root'
})
export class ClientesApiService {

  private baseUrl = environment.baseUrl;
  private endPoints = environment.endPoint;
  private microServicioPath = environment.msPath;

  constructor( private http: HttpClient ) { }

  public getClientsListApi(): Observable<Client[]> {
    return this.http.get<Client[]>(this.microServicioPath.clients).pipe(timeout(TIME_OUT));
  }
}
