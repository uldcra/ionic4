import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(){
        
    }

    stateLogin():boolean{
        if(localStorage.getItem('sesion')==null ||localStorage.getItem('sesion')){
           
            return false;
        }
        console.log("sesion iniciada");
        return true;
    }
}