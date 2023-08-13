import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { UsersService } from 'src/app/auth/users/users.service';
import { Recipe } from 'src/app/interfaces/recipe';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
    comments: any = [
        {
            commentText: '',
            recipeld: '',
            _createdOn: '',
            id: '',
            _ownerId: '',
            author: {
                email: '',
                password: '',
                _createdOn: '',
                _id: ''
            }
        }
    ];

    isOwner: boolean = false;

    commentForm = this.fb.group({
        commentText: ['', [Validators.minLength(10)]]
    });
    recipe: Recipe | undefined;

    constructor(
        private appService: AppService,
        private activatedRoute: ActivatedRoute,
        private userService: UsersService,
        private router: Router,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        this.fetchRecipe();
        this.loadComments();
    }

    onDeleteRecipe() {
        const id = this.activatedRoute.snapshot.params['recipeId'];

        const choice = window.confirm('Are you sure you want to delete this!');
        console.log('id', id);
        if (choice) {
            this.appService.deleteRecipe(id).subscribe();
            this.router.navigate(['/catalog']);
        }
    }

    loadComments(): void {
        const id = this.activatedRoute.snapshot.params['recipeId'];
        this.appService.getComments(id).subscribe((comments) => {
            this.comments = comments;
            // console.log(comments);
        });
    }

    heandlerAddComment(): void {
        const { commentText } = this.commentForm.value;
        const id = this.activatedRoute.snapshot.params['recipeId'];
        // console.log(id);
        // console.log(commentText);

        if (commentText) {
            this.appService.addComment(id, commentText).subscribe((comment) => {
                // console.log(comment);
            });
        }

        this.loadComments();
    }

    fetchRecipe(): void {
        const id = this.activatedRoute.snapshot.params['recipeId'];

        // console.log('id', id);
        this.appService.getRecipe(id).subscribe((singleRecipe) => {
            this.recipe = singleRecipe;
            this.isOwner = singleRecipe._ownerId === this.userService.user?._id
            console.log(this.isOwner);
        });
    }
}
