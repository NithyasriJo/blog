import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnComponent } from './add-on/add-on.component';
import { BlogItemsComponent } from './blog-items/blog-items.component';
import { InfoComponent } from './info/info.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {
    path: "",
    component: InfoComponent,
  },
  {
    path: "addblog",
    component: AddOnComponent
  },
  {
    path: "blog/:id",
    component: BlogItemsComponent
  },
  {
    path: "bloglist",
    component: InventoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogViewRoutingModule { }
