import { Component, OnInit } from '@angular/core';
import { GlobalRepoService } from 'src/app/Services/global-repo.service';
import { InfoServiceService } from 'src/app/Services/info-service.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  profile_data: any;
  display: any;
  data: any;
  edit: any;
  editasParse: any;
  textLength: number = 150;
  showMore: boolean;
  constructor(private view: InfoServiceService, private disp: GlobalRepoService) {
    this.profile_data = [];
    this.showMore = false
  }
  ngOnInit(): void {
    this.disp.myFunction();
    this.profile_data = this.disp.dataAsParse;
    console.log(this.profile_data)
    const timer: any = setTimeout(() => {
      this.profile_data = this.disp.dataAsParse(5);
    }, 500);
  }
  datadelete(i: any) {
    if (confirm("Are you sure to delete ")) {
      this.data = this.disp.dataAsParse;
      this.data.splice(i, 1);
    }
    localStorage.setItem("value", JSON.stringify(this.data));
  }
  editData(index: any) {
    alert("Are You Sure to edit?")
    this.disp.editFunction(index);
    console.log(index);;
  }
}

