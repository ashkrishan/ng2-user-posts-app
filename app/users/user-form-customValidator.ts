import {Control} from '@angular/common';

export class AddUserCustomValidators{
    
    static emailNotValid(control: Control) {
        
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (!regex.test(control.value)) {
            return { emailNotValid: true };
        }
        return null;
    } 
  
    
}