import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Class } from 'src/app/interfaces/class';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  classesList: Class[] = [];

  constructor(private apiService: AppService) {}

  ngOnInit(): void {
      this.apiService.getClasses().subscribe({
          next: (classes) => {
              this.classesList = classes;
          },
          error: (err) => {
              console.log(`Error ${err}`);
          }
      });
  }
}
