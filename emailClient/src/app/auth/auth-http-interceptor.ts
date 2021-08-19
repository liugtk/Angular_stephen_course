import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http'
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor() {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            withCredentials: true   // withCredentials is read-on
        })
        //next.handle return an observable
        return next.handle(modifiedReq).pipe(
            tap({
                next: x => { console.log(x); }
            })
        )
    }
}
