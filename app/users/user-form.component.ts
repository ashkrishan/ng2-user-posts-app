import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {CanDeactivate,Router } from '@angular/router-deprecated';
import {Http} from '@angular/http';
import {RouteParams} from '@angular/router-deprecated';

import {AddUserCustomValidators} from './user-form-customValidator';
import {User} from './user';
import {UsersService} from './users.service';



@Component({
    templateUrl: 'app/users/user-form.template.html',
    providers: [UsersService]
})

export class UserFormComponent implements CanDeactivate, OnInit{
      
    title: string;    
    form: ControlGroup;
    user = new User();
    // id: string;
    
    constructor(_fb: FormBuilder, 
               private _usersService: UsersService, 
               private _router: Router, 
               private _routeParams: RouteParams) {
        this.form = _fb.group({
                name: ['', Validators.required],
                email: ['', Validators.compose([
                                                Validators.required,     
                                                AddUserCustomValidators.emailNotValid     //Not async validator
                                               ]) 
                ],
                phone: [],
                address: _fb.group ({
                                    street: [],
                                    suite: [],
                                    city: [],        
                                    zipcode: [],    
                                    })
    
        })
    }
    
    ngOnInit() {
        this.user;
        var id = this._routeParams.get('id');
        
        this.title = id ? "Edit User" : "Add User";
        
        if(!id) {
            return;
        }
        this._usersService.getUser(id)
            .subscribe(user => this.user = user);
    }
    
    
    
    
    
    routerCanDeactivate () {
        if (this.form.dirty) {
            return  confirm("All form changes will be lost if not saved");
        }
        return true;
    }
    
    
    onSave() {
        let id = this._routeParams.get('id');
        if (id) {
            this._usersService.updateUser(this.user)
            .subscribe(response =>  { console.log(response) 
                                       console.log("user updated")});
        } else { 
        this._usersService.addUser(this.user)
        .subscribe(response => { console.log("User added") 
                                this._router.navigate(['Users']);
                                }
                  );
        }
    }

    
}