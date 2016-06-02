import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';

import {PostService} from './posts.Service';
import {UsersService} from '../users/users.service';
import {SpinnerComponent} from '../shared/spinner.component';
import {ShowPostDirective} from './posts.directive';
import {PaginationComponent} from '../shared/pagination.component'


@Component ({
    templateUrl: 'app/posts/posts.template.html',
    providers: [PostService, UsersService],
    directives: [SpinnerComponent, ShowPostDirective, PaginationComponent],
    styleUrls: ['app/posts/posts-styles.css']
    
    
})

export class PostsComponent implements OnInit{
    
    showPost = false;    
    details = {};
    comments = [];    
    posts = [];
    postsLoading: boolean;
    commentsLoading: boolean;
    allUsers = [];
    userPosts =[];
    
    pagePosts = [];
    pageSize = 10;
    
    constructor(private _postService: PostService, private _router: Router, private _usersService: UsersService) {
        
        
    }
    
    ngOnInit() {
        this.populateUsers();
        this.postsLoading = true;
        this._postService.getPosts()       
       .subscribe(response => this.posts = response, 
                   error => { 
                              if (error.status == 404) 
                               { 
                                   this._router.navigate(['NotFound']) 
                               }    
                             }, 
                  () => { console.log("completed"),
                          this.postsLoading = false;  
                        }
                  );
    }
    
    onClickPost (postId) {  
        
        this.posts.forEach(post => {
                                     if( postId == post.id) {
                                         this.showPost = true;
                                         this.details = post;
                                         return this.details, this.loadComments(postId);
                                          //console.log(this.comments);
                                          
                                     }
                                     return null;
                           }); 
    }
    
    loadComments (postId) {
        this.comments = null;
        this.commentsLoading = true;
        this._postService.getPost(postId)
                    .subscribe(comments => { this.comments = comments 
                                            // console.log(this.comments)
                                            return this.comments;
                                        },
                                error => console.log(error),
                                () => { console.log('completed fetching post comments');
                                        this.commentsLoading = false;
                                      }         
                               )  
                    //console.log(this.comments);
    }
         
     
     populateUsers() {
         return this._usersService.getUsers()
                .subscribe(users => this.allUsers = users);
     }
     
     onUserChangeReload(userId?) {
         return this._postService.getUserPost(userId)
                .subscribe(userposts => { 
                                          this.posts = userposts;
                                          this.pagePosts = _.first(this.posts, this.pageSize);
                                          
                                        }
                           )
     }
        
     onPostsPageChanged (page) {
         var startIndex = (page - 1) * this.pageSize;
         this.pagePosts = _.first(_.rest(this.posts, startIndex), this.pageSize);
     }
        
    
}
    

