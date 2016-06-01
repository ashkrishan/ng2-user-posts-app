import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
// import {RouteParams} from '@angular/router-deprecated';

@Injectable()
export class UsersService {
    
    private _url = 'http://jsonplaceholder.typicode.com/users';

    
    
    constructor(private _http: Http) {
        
    }
    
    getUsers() {
        return this._http.get(this._url)
        .map(response => response.json())
    }
    
    getUser(userId) {
        return this._http.get(this._getUserUrl(userId))
                .map(response => response.json());
    }
    
    updateUser(user) {
        return this._http.put(this._getUserUrl(user.id), JSON.stringify(user))
                .map(response => response.json());
    }
    
    addUser(user) {
        return this._http.post(this._url, JSON.stringify(user))
                .map(response => response.json());
    }
    
    deleteUser(userId) {
        return this._http.delete(this._getUserUrl(userId))
            .map(response => response.json());
    }

    private _getUserUrl(Id) {
       return this._url + '/' + Id;
    }
    
}