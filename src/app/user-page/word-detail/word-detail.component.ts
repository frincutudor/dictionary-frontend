import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../home/auth.service';
import { DataStorageService } from '../data-storage.service';
import {Word} from '../../shared/word.model';
import {Router, ActivatedRoute , Params} from '@angular/router';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {

  constructor(private authService : AuthService,
              private dataStorage : DataStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  isAdmin : boolean = false;
  word : Word;
  id : number;

  ngOnInit() {
    this.isAdmin = this.authService.isUserAdmin();
    console.log(this.isAdmin);
    this.route.params.subscribe(
      (params : Params) =>{
        this.id = +params['id'];
       
        this.word = this.dataStorage.getWord(this.id);  
         
    }
    );



    
  }

}
