import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';
import {ActivatedRoute} from '@angular/router'
import {Book} from '../book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book:Book;

  constructor(private svc:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.book = this.svc.books[parseInt(this.route.snapshot.paramMap.get('bookid')) - 1];
    console.log(this.book);
  }

  editBook() {
    this.svc.books[this.svc.books.indexOf(this.book)] = this.book;
   
  }

}
