import {Component, OnInit} from '@angular/core';
import {Word} from '../../shared/word.model';
import {Subscription} from 'rxjs/Subscription';
import {DataStorageService} from '../data-storage.service';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../../home/auth.service';

@Component({selector: 'app-word-list', templateUrl: './word-list.component.html', styleUrls: ['./word-list.component.css']})
export class WordListComponent implements OnInit {

  words : Word[];
  subscription : Subscription;
  isAdmin : boolean = false;

  constructor(private dataStorageService : DataStorageService,
              private router : Router, 
              private route : ActivatedRoute,
              private authService : AuthService) {}

  ngOnInit() {

    this
      .dataStorageService
      .getWords()
      .subscribe((words : Word[]) => {

        this.words = words;

      });
    this.subscription = this
      .dataStorageService
      .wordsChanged
      .subscribe((words : Word[]) => {
        this.words = words;
      });

    this.isAdmin = this.authService.isUserAdmin();

  }

  onNewRecipe() {
    this
      .router
      .navigate(['new'], {relativeTo: this.route});
  }

}
