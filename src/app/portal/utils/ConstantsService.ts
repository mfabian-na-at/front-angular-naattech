import {HttpHeaders} from '@angular/common/http';

export const PRINCIPAL_HEADER =  new HttpHeaders()
.set('Access-Control-Allow-Origin','*')
.set('Access-Control-Allow-Methods','GET,POST,OPTIONS,DELETE,PUT')
.set('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, rrrrAccess-Control-Request-Method')
.set('Content-Type','applicataion/json');