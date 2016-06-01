import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

// import 'rxjs/add/operator/flatMap';
import 'rxjs/add/operator/filter';

@Injectable()
export class PostService {
    
    private _url = "http://jsonplaceholder.typicode.com/posts";
    
    // private _randomPicsUrl = 'https://unsplash.it/80/80/?random=people'; 
    
    constructor(private _http: Http) {
        
    }
    
    getPosts() {
        return this._http.get(this._url)        
        .map(response => response.json());
        
    }
    
    getPost(postId) {
        //console.log(this._url + '/' + postId + '/comments')
        return this._http.get(this._url + '/' + postId + '/comments')
                .map(response => response.json());
    }
    
    getUserPost(userId?) {
        if (!userId) {
            return this.getPosts();
        }
        return this._http.get(this._url + '?' + 'userId=' + userId)
               .map(response => response.json());
    }

 
    
}