import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public tableData1: TableData;
  public tableData2: TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Name', 'Definition'],
      dataRows: [
          ['singularitate', 'Calitatea de a fi singular'],
          ['primeni', 'A(-și) schimba rufăria, lenjeria purtată, murdară cu alta curată'],
       
      ]
  };
  }

}
