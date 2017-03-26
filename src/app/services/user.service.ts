import { UserApi } from '../../fw/users/user-api';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService implements UserApi {

    public isAuthenticated : boolean = false;
    public userName : string;
    
    constructor(private router : Router){}
    
    signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
        this.isAuthenticated = true;
        this.userName = username;
        return Observable.of({});
    }


    signOut() : Observable<any>{
        this.isAuthenticated = false;
        this.userName = null;
        this.router.navigate(['/signin'])
        return Observable.of({});
    }

    getUsername(): string {
        return this.userName;
    }

}