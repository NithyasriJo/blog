import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogViewRoutingModule } from './blog-view-routing.module';
import { InfoComponent } from './info/info.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BlogItemsComponent } from './blog-items/blog-items.component';
import { AddOnComponent } from './add-on/add-on.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InfoComponent,
    InventoryComponent,
    BlogItemsComponent,
    AddOnComponent
  ],
  imports: [
    CommonModule,
    BlogViewRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogViewModule { }
