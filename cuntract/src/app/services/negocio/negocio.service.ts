import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';

const BASIC_URL = "http://localhost:8080/"
@Injectable({
  providedIn: 'root'
})
export class NegocioService {

  constructor(private http: HttpClient) {

  }
  postOferta(ofertaDto: any): Observable<any> {
    const userId = UserStorageService.getUserId();
    console.log("wazaaa")
    return this.http.post(BASIC_URL + `api/negocio/oferta/${userId}`, ofertaDto, {

      headers : this.createAuthorizationHeader()
    })
  }
  getAllOfertasByUserId(): Observable<any> {
    const userId = UserStorageService.getUserId();
    console.log("wazaaa")
    return this.http.get(BASIC_URL + `api/negocio/ofertas/${userId}`, {

      headers : this.createAuthorizationHeader()
    })
  }

  getOfertaById(ofertaId: any): Observable<any> {
    return this.http.get(BASIC_URL + `api/negocio/oferta/${ofertaId}`, {

      headers : this.createAuthorizationHeader()
    })
  }
  updateOferta(ofertaId: any, ofertaDto:any): Observable<any>{
    return this.http.put(BASIC_URL + `api/negocio/oferta/${ofertaId}`, ofertaDto, {

      headers : this.createAuthorizationHeader()
    })
  }
  deleteOferta(ofertaId:any): Observable<any>{
    return this.http.delete(BASIC_URL + `api/negocio/oferta/${ofertaId}`, {

      headers : this.createAuthorizationHeader()
    })
  }
  createAuthorizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    )
  }
}
