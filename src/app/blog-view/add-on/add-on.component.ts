import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalRepoService } from 'src/app/Services/global-repo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.css']
})
export class AddOnComponent implements OnInit {

  exform: any;
  array: any = [];
  existData: any;
  stored: any;
  edit: any;

  constructor(private route: Router, private http: GlobalRepoService) {

  }
  ngOnInit(): void {

    this.exform = new FormGroup({
      'title': new FormControl(),
      'description': new FormControl(),
      'content': new FormControl(),
      'author': new FormControl()
    });
    this.array = this.http.dataAsParse;
    console.log(this.array);
  }


  clicksub(data: any) {


    this.http.submit(data, this.array);
    this.route.navigateByUrl("bloglist")
  }



  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get message() {
    return this.exform.get('message');
  }
}
function clicksub(data: any, any: any) {
  throw new Error('Function not implemented.');
}

