import { Injectable } from '@angular/core';

/* Internet */
import { HttpClient } from '@angular/common/http'

/* RXJS */
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

/* Constants and evironment */
import { TIME_OUT } from 'src/app/portal/utils/ConstantsApp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private microServicePath = environment.msPath;

  constructor(private http: HttpClient) { }

  public getNewsListService(){
    return this.http.get(this.microServicePath.news).pipe(timeout(TIME_OUT));
  }
}
