import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { VMUser } from '../viewmodel/VMUser';
import { VMRegister } from '../viewmodel/VMRegister';
import { VMSignIn } from '../viewmodel/VMSignin';

@Injectable({ providedIn: 'root' })
export class UserService {
  apiUrl = environment.backend + 'User/';
  currentLoggedUser: BehaviorSubject<VMUser> = new BehaviorSubject<VMUser>(null);
  constructor(private http: HttpClient, private router: Router) {}
  
  Register(Userdata:VMRegister){
      let url=this.apiUrl+"Register";
      return this.http.post(url,Userdata).pipe(catchError(this.errorhandler));
  }
  login(credential: VMSignIn) {
    let apiUrl = this.apiUrl + 'Login';
    return this.http
      .post<VMUser>(apiUrl, credential)
      .pipe(catchError(this.errorhandler));
  }
  logout(){
    this.currentLoggedUser.next(null);
    this.router.navigate(['Signin']);
  }
  isAdminUser():boolean {
    let user:VMUser = null;
    this.currentLoggedUser.subscribe((res) => {
        user = res;
    });
    if (user == null) {
      return false;
    } else {
        if(user.IsAdmin){return true;}
        else return  false;
    }
  }
  isCustomerUser():boolean {
    let user:VMUser = null;
    this.currentLoggedUser.subscribe((res) => {
        user = res;
    });
    if (user == null) {
      return false;
    } else {
        if(!user.IsAdmin){return true;}
        else return  false;
    }
  }
  errorhandler(error: HttpErrorResponse) {
    return throwError(error);
  }
  
}
