import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private error;
  constructor() { }
  
  private actionCodeSettings = {
    url: 'https://shopping-cart-yetix33.c9users.io/signup-finish',
    handleCodeInApp: true
  }
  
  signupUser(email: string, password: string){
    console.log(email);
    
  firebase.auth().sendSignInLinkToEmail(email, this.actionCodeSettings)
  .then(function(result) {
   console.log(result);
    window.localStorage.setItem('emailForSignIn', email);
    window.localStorage.setItem('passwordForSignIn', password);
  })
  .catch(function(error) {
      console.log(error);  
      window.alert(error);
  });

  }
  
verifyAccount(password : string): boolean{
        var email = window.localStorage.getItem('emailForSignIn');
        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
           firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(function(result){
               return true; 
                
              }
                )
    
              .catch(
                  error => {
                    console.log(error);
                     window.alert(error);
                    return false;
                  }
              );
              return true;
              
        } else{ return false;
        }    
  }
  
}
