import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-finish',
  templateUrl: './signup-finish.component.html',
  styleUrls: ['./signup-finish.component.css']
})
export class SignupFinishComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }
  verify(form: NgForm){
    if(this.authService.verifyAccount(form.value.password) == true){
      this.router.navigate(['/', 'items']);
      
    } else {
      console.log('rip');
      
    }
  }

}
