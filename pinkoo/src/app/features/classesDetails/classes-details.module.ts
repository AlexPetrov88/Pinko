import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassesDetailsRoutingModule } from './classes-details-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    ClassDetailsComponent
  ],
  imports: [
    CommonModule,
    ClassesDetailsRoutingModule,
    YouTubePlayerModule
  ]
})
export class ClassesDetailsModule { }
