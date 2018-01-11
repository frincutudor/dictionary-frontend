import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../home/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService,
    private router : Router, 
     private route : ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  onRegister(form : NgForm){
    const email: string = form.value.email;
    const password : string = form.value.password;
    this.authService.onRegister(email , password);
  }

}
