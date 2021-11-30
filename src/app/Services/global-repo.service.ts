import { Injectable } from '@angular/core';
import { InfoServiceService } from './info-service.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalRepoService {
  data: any;
  dataAsString: any;
  dataAsParse: any;
  my_data: any;
  data2: any;
  edit: number;
  array: any
  constructor(private store: InfoServiceService) {
    this.edit = -1;
  }
  specific(index: any) {
    return this.dataAsParse[index];
  }
  myFunction() {
    this.store.myData().subscribe(data => {
      this.my_data = data;
      let localstor = localStorage.getItem("value")

      if (localstor == null) {
        this.my_data.articles.sort((x: any) => {
          const a = new Date(x.publishedAt)
          console.log(a)
          const b = new Date()
          return a === b ? 0 : a > b ? 1 : -1;
        })
        localStorage.setItem("value", JSON.stringify(this.my_data.articles));
      }
    });
    this.dataAsString = localStorage.getItem("value");
    this.dataAsParse = JSON.parse(this.dataAsString)
  }

  editFunction(i: any) {
    if (i >= 0) {
      this.edit = i
    }
    console.log(i);

  }

  submit(data: any, array: any) {
    if (this.edit == -1) {
      array.push(data.value);
      console.log(array);
      localStorage.setItem("value", JSON.stringify(array))
    }
    else {
      // this.array[this.edit] = data.value
      // localStorage.setItem("value", JSON.stringify(array))
      // console.log(this.array)
      array[this.edit].title = data.value.title;
      array[this.edit].description = data.value.description;
      console.log(array[this.edit].title);

      localStorage.setItem("value", JSON.stringify(array))

    }
  }


}
