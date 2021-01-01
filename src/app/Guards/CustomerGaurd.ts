import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/UserService';


@Injectable({providedIn:'root'})
export class CustomerGaurd implements CanActivate{

    constructor(private userSRV:UserService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       if(this.userSRV.isCustomerUser()){
           return true;
       }
       else{
           this.userSRV.logout();
       }
    }

}