import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {NavbarComponent} from './navbar/navbar.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {HomeComponent} from './home/home.component';
import {UserFormComponent} from './users/user-form.component';
import {NotFoundComponent} from './not-found.component';


@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    // {path: '/', name: 'Home', component: HomeComponent},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/users/new', name: 'AddUser', component: UserFormComponent},
    {path: '/users/:id', name: 'EditUser', component: UserFormComponent},
    {path: '/not-found', name: 'NotFound', component: NotFoundComponent},
    //{path: '/posts/:id/comments', name: 'Comments', component: PostsComponent},
    {path: '*/other', component: HomeComponent}
])


@Component({
    selector: 'my-app',
    template: `<navbar-comp></navbar-comp>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
    // styles:[
    //     `
    //     body {
    //         padding-top: 100px;
    //     }
        
    //     `
    // ]
})

export class AppComponent { }