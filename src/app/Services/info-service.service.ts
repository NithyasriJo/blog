import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {
  data: any;
  data1: any;
  data2: string | null;
  constructor(private http: HttpClient) {
    this.data2 = localStorage.getItem("val");
    if (this.data2 == null) {
      return
    }
  }
  myData(): Observable<any> {
    return this.http.get<any>("https://api.json-generator.com/templates/VUDUZd4V3QyJ/data?access_token=sdxv5aybndbk39af52pub0x8rlmyp6usm4glpoh2")
  }
  specificid(index: any) {
    return this.data[index]
  }

}

