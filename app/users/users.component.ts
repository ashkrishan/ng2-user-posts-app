import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';


import {UsersService} from './users.service'; 

@Component ({
    templateUrl: 'app/users/users.template.html',
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES]
})

export class UsersComponent implements OnInit {
    users = [];
    constructor(private _usersService: UsersService) {
        
    }
    
    ngOnInit () {
        this._usersService.getUsers()
        .subscribe(response => { this.users = response 
                                console.log(this.users)    
                            })
    }
    
    onDelete (user) {
        confirm("Are you sure you want to delete this record?");            
        this._usersService.deleteUser(user)
        .subscribe(response => {response
                                console.log("user deleted")});
        
    }
    
}