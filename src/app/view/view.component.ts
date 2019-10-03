import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../dataservice.service';
import { Bookcomment } from '../bookcomment';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  name: string;
  price: number;
  author: string;
  comments: Bookcomment[] = [];
  book: Book;
  index: number = 0;


  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.index = parseInt(this.route.snapshot.paramMap.get('bookid'));
    this.svc.books.forEach(element => {
      if (element.id == this.index) {
        this.book = element;
      }
    });
    console.log(this.book.id);
    this.name = this.book.title;
    this.author = this.book.author;
    this.price = this.book.price;
    console.log('comments....'+this.book.comment.length);
    this.comments = this.book.comment;

  }







}
