import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../home/auth.service';
import {Word} from '../../shared/word.model';
import {Router, ActivatedRoute , Params} from '@angular/router';
import { DataStorageService } from '../../user-page/data-storage.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private authService : AuthService,
    private dataStorage : DataStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  
    isAdmin : boolean = false;
    user : User;
    id : number;
    mode : string;
    
    

  ngOnInit() {

    this.isAdmin = this.authService.isUserAdmin();
    console.log(this.isAdmin);
    this.route.params.subscribe(
      (params : Params) =>{
        this.id = +params['id'];
        this.mode = params['mode'];

        console.log(this.mode);

        this.mode !== "false" ? this.user = this.dataStorage.getPendingUser(this.id) : this.user = this.dataStorage.getNotPendingUser(this.id);
            
        
      }
        
         
    
    );

  
  }

}
