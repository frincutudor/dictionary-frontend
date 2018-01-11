import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Params ,Router} from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { Word } from '../../shared/word.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: string;
  words : Word[];

  id :number ;

  constructor(private dataStorageService : DataStorageService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
  
    this.route.params.subscribe(
      (params: Params) => {
        this.category = params['category'];
        console.log("ajunge")
        this.words = this.dataStorageService.getCategoryList(this.category);
      }
    );
  }

}
