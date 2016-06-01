import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'navbar-comp',
    templateUrl: 'app/navbar/navbar.template.html',
    directives: [ROUTER_DIRECTIVES]
    
})

export class NavbarComponent {
    constructor(private _router: Router) {
        
    }
    
   isCurrentRoute(route) {
       var instruction = this._router.generate(route);
       return this._router.isRouteActive(instruction);
   }
    
}