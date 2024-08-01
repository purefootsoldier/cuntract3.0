import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from '../storage/user-storage.service';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class TalentoService {

  constructor(private http: HttpClient,) {

  }
  getAllOfertas(): Observable<any> {
    return this.http.get(BASIC_URL + `api/talento/ofertas`, {
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
  searchOfertaByTitulo(titulo:any): Observable<any> {
    return this.http.get(BASIC_URL + `api/talento/buscar/${titulo}`, {
      headers : this.createAuthorizationHeader()
    })
  }
  getOfertaDetailsById(ofertaId:any): Observable<any> {
    return this.http.get(BASIC_URL + `api/talento/oferta/${ofertaId}`, {
      headers : this.createAuthorizationHeader()
    })
  }

  giveReview(reviewDto:any): Observable<any> {
    return this.http.post(BASIC_URL + `api/talento/review`, reviewDto)
  }
}
