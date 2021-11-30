import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalRepoService } from 'src/app/Services/global-repo.service';

@Component({
  selector: 'app-blog-items',
  templateUrl: './blog-items.component.html',
  styleUrls: ['./blog-items.component.css']
})
export class BlogItemsComponent implements OnInit {
  id: any;
  blog: any;
  content: any;
  constructor(private activeRouting: ActivatedRoute, private collection: GlobalRepoService) {
    this.content = [];
  }

  ngOnInit(): void {
    this.id = this.activeRouting.snapshot.params['id'];
    this.content = this.collection.dataAsParse[this.id];
    console.log(this.content.title)


  }

}
