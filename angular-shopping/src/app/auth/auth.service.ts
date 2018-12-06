import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private error;
  private token : string;
  private user;
  constructor(private router : Router) { }
  
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
  
  
SignIn(email : string, password: string){
  firebase.auth().signInWithEmailAndPassword(email, password).then(
    res => {
      firebase.auth().currentUser.getIdToken().then(
          (token: string) => {this.token= token;
                              this.router.navigate(['/', 'items']);
                              this.user = firebase.auth().currentUser;  
          }
        )
      
    }
  ).catch(
    error => console.log(error)
    );
}

logout(){
  firebase.auth().signOut();
  this.token = null;
  
}

getToken(){
  firebase.auth().currentUser.getIdToken().then(
    (token : string) => this.token = token
    );
  return this.token;
}

isAuthenticated(){
  return this.token != null;
  
}
getID(){
  return this.user.uid;
  
}

  
}
