import { UserApi } from '../../fw/users/user-api';
import { Injectable} from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService implements UserApi {

    private isAuthenticated : boolean = false;
    
    constructor(){}
    
    signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
        this.isAuthenticated = true;
        return Observable.of({});
    }


}