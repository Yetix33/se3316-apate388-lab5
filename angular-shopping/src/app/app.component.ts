import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-shopping';
  
  
  
  ngOnInit(){
    firebase.initializeApp({
       apiKey: "AIzaSyDGE16dAB0LRHwwyBceKoOEJj2952-Hk0s",
      authDomain: "store-apate3883.firebaseapp.com",
      databaseURL: "https://store-apate3883.firebaseio.com",
      projectId: "store-apate3883",
      storageBucket: "store-apate3883.appspot.com",
      messagingSenderId: "949049047024"
      
    });
    
  }
}
