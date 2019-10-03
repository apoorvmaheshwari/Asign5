  
import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';
import { Book } from '../book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books:Book[] = [];

  constructor(private svc:DataService) { }

  ngOnInit() {
    console.log(this.svc.books.length);
    this.books = this.svc.books;
    console.log(this.books.length);
  }

}