import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpClient, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './UserService';




@Injectable()
export class Interceptor implements HttpInterceptor{
    constructor(private usersrv:UserService){}
    intercept(req,next){
        let Token=null;
     this.usersrv.currentLoggedUser.subscribe(res=>{
         if(res!=null){
            Token=res.Token;
         }
         
     });
     if(Token==null)
     {
         return next.handle(req);
     }
     else
     {
     let tokinzreq=req.clone({
         setHeaders:{
             Authorization:Token
         }
     });
     return next.handle(tokinzreq);
    }
    }

}