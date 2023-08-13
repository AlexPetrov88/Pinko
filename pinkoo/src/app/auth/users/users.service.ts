import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UtilService } from 'src/app/services/util.service';
import { User } from 'src/app/interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService implements OnDestroy {
    user$$ = new BehaviorSubject<User | undefined>(undefined);
    user$ = this.user$$.asObservable();

    user: User | undefined;

    get isLogged(): boolean {
        return !!this.user;
    }
   

    subscription: Subscription;

    constructor(private http: HttpClient, private utilService: UtilService) {
        this.subscription = this.user$.subscribe((user) => {
            this.user = user;
            // console.log('subscribe user', this.user);
            
        });
    }


    getUser() {
        this.http.get<User>('http://localhost:3030/users/me').pipe(
            tap((user) => {
                this.user = user;
            })
        );
        return this.user
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post<any>('http://localhost:3030/users/login', { email, password }).pipe(
            tap((user) => {
                this.user$$.next(user);
                const userData = {
                    email: user.email,
                    id: user._id,
                    token: user.accessToken
                };
                this.utilService.setUserData(userData);
            })
        );
    }

    register(email: string, password: string): Observable<any> {
        return this.http
            .post<any>('http://localhost:3030/users/register', { email, password })
            .pipe(
                tap((user) => {
                    this.user$$.next(user);
                    const userData = {
                        email: user.email,
                        id: user._id,
                        token: user.accessToken
                    };
                    this.utilService.setUserData(userData);
                })
            );
    }

    logout(): Observable<any> {
        return this.http.get('http://localhost:3030/users/logout').pipe(
            tap(() => {
                this.user = undefined;
                this.user$$.next(undefined);
                this.utilService.clearUserData();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
