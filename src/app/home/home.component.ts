import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }


  onSignIn(form : NgForm){
    const email: string = form.value.email;
    const password : string = form.value.password;
    this.authService.onSignIn(email , password);
    
  }

}
