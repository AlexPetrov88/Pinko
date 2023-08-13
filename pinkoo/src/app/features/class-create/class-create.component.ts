import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { UsersService } from 'src/app/auth/users/users.service';
import { urlValidator } from 'src/app/shared/validators/urlValidator';

@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.css']
})
export class ClassCreateComponent {
  createClassForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    video: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
    imageUrl: ['', [Validators.required, urlValidator()]],
    summary: ['', [Validators.required, Validators.minLength(10)]]
});
constructor(private appService: AppService, private fb: FormBuilder, private router: Router, private userService: UsersService ) {}


createNewClass() {
    if (this.createClassForm.invalid) {
        return;
    }
    
    const { title, video, imageUrl, summary } = this.createClassForm.value;

    this.appService.createNewClass(title!, video!, imageUrl!, summary!).subscribe(() => {
        this.router.navigate(['/classes'])
        console.log(this.userService.isLogged);
        
    })
}
}
