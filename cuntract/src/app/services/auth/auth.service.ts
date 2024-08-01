import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';
const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userStorageService: UserStorageService) { }
  registerTalent(signupRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "sign-up/talent-signup", signupRequest)
  }
  registerBusiness(signupRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "sign-up/business-signup", signupRequest)
  }
  login(username: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { username, password };
    console.log(body);
    return this.http.post(BASIC_URL + "authenticate", body, { headers, observe: 'response' }).pipe(
      map((res: HttpResponse<any>) => {
        const token = res.headers.get('authorization').substring(7);
        const user = res.body;
        console.log(res.body);
        if(token && user) {
          this.userStorageService.saveToken(token);
          this.userStorageService.saveUser(user);
          return true;
        }
        return false;
      }))
  }

}
