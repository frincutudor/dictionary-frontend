import {Word} from "../shared/word.model";
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx'
import {Subject} from "rxjs/Subject";

import {Response} from "@angular/http";
import {Router} from "@angular/router";
import { User } from "../shared/user.model";

@Injectable()
export class DataStorageService {

    private words : Word[];
    private users : User[];
    private categoryWords : Word[];
    wordsChanged = new Subject < Word[] > ();
    usersChanged = new Subject < User[] > ();
    private pendingUsers : User[] = [];
    private notPendingUsers : User[] = [];
    constructor(private http : Http, private router : Router) {}

    getWords() {

        const header = new Headers({'Content-Type': 'application/json'});

       return  this
            .http
            .get("http://localhost:8080/words", {headers: header})
            .map((response : Response) => {

                const words : Word[] = response.json();
                this.words = words;
                return words;

            })
           

    
    }

    getUsers() {

        const header = new Headers({'Content-Type': 'application/json'});

       return  this
            .http
            .get("http://localhost:8080/users", {headers: header})
            .map((response : Response) => {

                const users : User[] = response.json();
                this.users = users;

                for(let user of users){
                    if(user.pending === "true"){
                        this.pendingUsers.push(user);
                    }
                    if(user.pending === "false"){
                        this.notPendingUsers.push(user);
                    }
                }

                console.log(this.pendingUsers);
                console.log(this.notPendingUsers);

                return users;

            })
           

    
    }

    getCategoryList(category : string) {
        this.categoryWords = [];
        for (let word of this.words) {
            if (word.name.charAt(0) == category) {
                this
                    .categoryWords
                    .push(word);
            }
        }
        console.log(this.categoryWords);
        return this.categoryWords;
    }

    getWord(index : number){
       
       return this.words[index];
    }

    getUser(index : number){
       
       return this.users[index];
    }

    setPendingUsers(users : User[]){
        this.pendingUsers = users;
        
    }

    getPendingUser(index : number) {
        console.log(this.pendingUsers[index]);
        return this.pendingUsers[index];
    }
    setNotPendingUsers(users : User[]){
        
        this.notPendingUsers = users;

    }

    getNotPendingUser(index : number) {
        console.log(this.pendingUsers[index]);
        return this.notPendingUsers[index];
    }

}