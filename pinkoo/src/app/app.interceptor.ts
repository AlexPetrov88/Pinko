// app.interceptor.ts
import { Injectable, Provider } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UtilService } from './services/util.service';
import { UsersService } from './auth/users/users.service';

const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private utilService: UtilService, private userService: UsersService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.startsWith('/data')) {
            request = request.clone({
                url: request.url.replace('/data', apiUrl),
                withCredentials: false // Cookie -> JWT
            });
        }
        if (request.body != null) {
            request = request.clone({
                setHeaders: {
                   'Content-Type': 'application/json'
                }
            });
        }
        const currentUser = this.userService.user$$.value;
        if (currentUser && currentUser.accessToken) {
            request = request.clone({
                setHeaders: {
                   'X-Authorization': currentUser.accessToken,
                }
            });
        }

        return next.handle(request).pipe(
            catchError((err) => {
                if (err.status === 403) {
                    this.utilService.clearUserData();
                }
                if (err.status === 401) {
                    this.utilService.clearUserData();
                }
                if (err.status === 204) {
                    return throwError(() => {
                        const emptyResponse = new HttpResponse<any>({ body: null, status: 204 });

                        return emptyResponse;
                    });
                }
                return throwError(() => err); 
            })
        );
    }
}

export const appInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS
};

