import { Component, OnInit } from '@angular/core';
import { Word } from '../../shared/word.model';
import { Subscription } from 'rxjs/Subscription';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../home/auth.service';
import { DataStorageService } from '../../user-page/data-storage.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];
  usersPending: User[];
  subscription: Subscription;
  isAdmin: boolean = false;
 

  constructor(private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {

    this
      .dataStorageService
      .getUsers()
      .subscribe((users: User[]) => {

       this.setArray(users);

      });


    this.subscription = this
      .dataStorageService
      .usersChanged
      .subscribe((users: User[]) => {
       this.setArray(users);
      });

    this.isAdmin = this.authService.isUserAdmin();
   

  }

  setArray(users: User[]) {

    let newArray: User[] = [];
    let pendingArray : User[] = [];

    for (let user of users) {
      
      if(user.pending !== "false"){
        pendingArray.push(user);
      }
      else{
      console.log(user);
      if (user.role !== "ADMIN") {
        newArray.push(user);
      }
      }
      
    }
    this.users = newArray;
    this.usersPending = pendingArray;

    this.dataStorageService.setPendingUsers(pendingArray);
    this.dataStorageService.setNotPendingUsers(newArray);
  }

}

