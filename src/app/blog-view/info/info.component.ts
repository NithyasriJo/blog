import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalRepoService } from 'src/app/Services/global-repo.service';
import { InfoServiceService } from 'src/app/Services/info-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  profile_data: any;
  data1: any = [];
  articles: any;
  display: any;
  textLength: number = 150;
  showMore: boolean;
  data: any;
  constructor(private card: GlobalRepoService) {
    this.profile_data = [];
    this.articles;
    this.display = "none"
    this.showMore = false
  }
  ngOnInit(): void {
    this.card.myFunction();
    this.profile_data = this.card.dataAsParse;
    console.log(this.profile_data);
    const timer: any = setTimeout(() => {
      this.profile_data = this.card.dataAsParse(5);
    }, 500);
  }
  view() {
    this.display = "block"
  }
  dataDelete(i: any) {
    if (confirm("Are you sure to delete?")) {
      this.data = this.card.dataAsParse;
      this.data.splice(i, 1);
    }
    localStorage.setItem("value", JSON.stringify(this.data));
  }
  editData(index: any) {
    alert("Are you sure to Edit?")
    this.card.editFunction(index);
    console.log(index);
    ;
  }
}

