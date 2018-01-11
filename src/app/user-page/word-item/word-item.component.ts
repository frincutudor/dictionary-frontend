import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Word } from '../../shared/word.model';

@Component({
  selector: 'app-word-item',
  templateUrl: './word-item.component.html',
  styleUrls: ['./word-item.component.css']
})
export class WordItemComponent implements OnInit {

  @Input() word: Word;
  @Input() index: number
  shortDescription: string;

  constructor() { }

  ngOnInit() {
    this.shortDescription = this.word.definition.substring(0,15);
  }

}
