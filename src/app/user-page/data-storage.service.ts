import {Word} from "../shared/word.model";
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx'
import {Subject} from "rxjs/Subject";

import {Response} from "@angular/http";
import {Router} from "@angular/router";

@Injectable()
export class DataStorageService {

    private words : Word[];
    private categoryWords : Word[];
    wordsChanged = new Subject < Word[] > ();

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
        console.log(this.words);
       return this.words[index];
    }

}