import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataservice.service';
import {Bookcomment} from '../bookcomment';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  
  name:string="";
  comment:string="";
  index:number=0;
  constructor(private svc:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
   this.index=parseInt(this.route.snapshot.paramMap.get('bookid'))-1;
   
  }
  commentBook() {
    this.svc.books[this.index].comment.push(new Bookcomment(this.name,this.comment));
    console.log(this.svc.books);   
  }

}
