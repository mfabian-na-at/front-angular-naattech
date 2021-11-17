import { Injectable } from '@angular/core';

/* Http */
import { HttpClient } from '@angular/common/http';

/* RxJS */
import { timeout } from 'rxjs/operators';
import { Observable } from 'rxjs';

/* Constants and environment */
import { TIME_OUT } from 'src/app/portal/utils/ConstantsApp';
import { environment } from 'src/environments/environment';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  /* URL and Endpoint */
  private baseRUL = environment.baseUrl;
  private endPoints = environment.endPoint;

  constructor( private http: HttpClient ) { }


  public postLogin(): Observable<string>{
    return this.http.post<string>(this.baseRUL + this.endPoints.login, '').pipe(timeout(TIME_OUT));
  }

  public postRefreshToken(): Observable<string>{
    return this.http.post<string>(this.baseRUL + this.endPoints.refreshToken, '').pipe(timeout(TIME_OUT));
  }
  
}
