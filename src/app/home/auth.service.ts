import { NotificationsService } from './../notification-center.service';
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {User} from "../shared/user.model";
import {UserView} from "../shared/user-view.model";
import 'rxjs/Rx'
import {Subject} from "rxjs/Subject";

import {Response} from "@angular/http";
import {Router} from "@angular/router";

import {RequestOptions} from '@angular/http';
@Injectable()
export class AuthService {

    private url : string;
    private authenticatedUser : User;
    
    constructor(private http : Http, private router : Router , private notificationService: NotificationsService) {}

    onSignIn(username : string, password : string) {

        let user = new UserView(username, password);
        const header = new Headers({'Content-Type': 'application/json'});

        this
            .http
            .post("http://localhost:8080/login", user, {headers: header})
            .map((response : Response) => {

                const authenticatedUser : User = response.json();

                return authenticatedUser;

            })
            .subscribe((authenticatedUser : User) => {

                this.authenticatedUser = authenticatedUser;
                this
                        .router
                        .navigate(['user-page']);

                        console.log(this.authenticatedUser);

            });

    }

    isAuthenticated() {
        return this.authenticatedUser != null && this.authenticatedUser.pending === "false";
    }

   
    logout() {
        this.authenticatedUser = null;
        this
            .router
            .navigate(['home']);
    }

    isUserAdmin() {
        return this.authenticatedUser.role === "ADMIN";
    }

    onRegister(email : string , password : string){
        
        let user = new UserView(email, password);
        const header = new Headers({'Content-Type': 'application/json'});

        this
            .http
            .post("http://localhost:8080/register", user, {headers: header}).
          subscribe((response: Response) => {

               //this.notificationService.showNotification('top','center','success' , 'Your request was send to our staff.')
                this
                        .router
                        .navigate(['home']);

                       
            });

    }
}