import { Component, OnInit } from '@angular/core';
import { AuthService } from '../home/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService, private router :Router,  private route : ActivatedRoute) { }

  isAdmin :boolean = false;
  
  ngOnInit() {

    this.isAdmin = this.authService.isUserAdmin();
    console.log(this.isAdmin);
  }

  onLogout(){

    this.authService.logout();
  }

  onSelectedCategory(category : string){

    this.router.navigate([category] ,{relativeTo: this.route});

  }

}
