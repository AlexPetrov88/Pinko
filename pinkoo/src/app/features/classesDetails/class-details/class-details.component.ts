import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Class } from 'src/app/interfaces/class';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent {
  class: Class | undefined;
  apiLoaded = false;
  

  constructor(
      private appService: AppService,
      private activatedRoute: ActivatedRoute,
      
  ) {}

  ngOnInit(): void {
      this.fetchClass();

 
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
  }
  }

  fetchClass(): void {
      const id = this.activatedRoute.snapshot.params['classId'];

      this.appService.getClass(id).subscribe((singleClass) => {
        
          this.class = singleClass;
      });
  }
}
