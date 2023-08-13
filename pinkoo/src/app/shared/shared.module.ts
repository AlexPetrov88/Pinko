import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors/errors.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    ErrorsComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
