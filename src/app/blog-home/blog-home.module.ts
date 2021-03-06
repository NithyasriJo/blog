import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogHomeRoutingModule } from './blog-home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BlogHomeRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class BlogHomeModule { }
