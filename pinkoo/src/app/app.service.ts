import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Recipe } from './interfaces/recipe';
import { Class } from './interfaces/class';
import { Gadjet } from './interfaces/gadjet';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    recipe$$ = new BehaviorSubject<Recipe | undefined>(undefined);
    recipe$ = this.recipe$$.asObservable();

    recipe!: Recipe | undefined;

    comments$$ = new BehaviorSubject<any | []>([]);
    comments$ = this.recipe$$.asObservable();

    comments!: Recipe | undefined;
    
    subscription: Subscription;
    
    constructor(private http: HttpClient) {
        this.subscription = this.recipe$.subscribe((recipe) => {
            this.recipe = recipe;
        });
        this.subscription = this.comments$.subscribe((comments) => {
            this.comments = comments;
        });
    }
    
    addComment(id: string, commentText: string): Observable<Comment> {
        return this.http.post<Comment>('/data/comments', { id, commentText });
    }
    
    getComments(id: string): Observable<Comment[]> {
        const searchQuery = encodeURIComponent(`recipeId="${id}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);

        return this.http.get<Comment[]>(
            `/data/comments/$?where=${searchQuery}&load=${relationQuery}`
        );
    }

    getRecipes() {
        const { apiUrl } = environment;
        return this.http.get<Recipe[]>(`${apiUrl}/recipes?sortBy=_createdOn%20desc`);
    }

    getClasses() {
        const { apiUrl } = environment;
        return this.http.get<Class[]>(`${apiUrl}/classes`);
    }

    getClass(id: string) {
        const { apiUrl } = environment;
        return this.http.get<Class>(`${apiUrl}/classes/${id}`);
    }

    getRecipe(id: string) {
        const { apiUrl } = environment;
        return this.http.get<Recipe>(`${apiUrl}/recipes/${id}`).pipe(
            tap((recipe) => {
                this.recipe$$.next(recipe);
            })
        );
    }

    getGadjets() {
        const { apiUrl } = environment;
        return this.http.get<Gadjet[]>(`${apiUrl}/tools`);
    }


    createNewRecipe(
        recipeName: string,
        chef: string,
        time: string,
        imageUrl: string,
        summary: string
    ) {
        return this.http.post<Recipe>('/data/recipes', {
            recipeName,
            chef,
            time,
            imageUrl,
            summary
        });
    }

    createNewGadjet(name: string, price: string, imageUrl: string) {
        return this.http.post<Gadjet>('/data/tools', { name, price, imageUrl });
    }

    createNewClass(title: string, video: string, imageUrl: string, summary: string) {
        return this.http.post<Class>('/data/classes', { title, video, imageUrl, summary });
    }

    editRecipe(
        id: string,
        recipeName: string,
        chef: string,
        time: string,
        imageUrl: string,
        summary: string
    ) {
        return this.http.put<Recipe>(`/data/recipes/${id}`, {
            recipeName,
            chef,
            time,
            imageUrl,
            summary
        });
    }

    deleteRecipe(id: string) {
        return this.http.delete<any>(`/data/recipes/${id}`);
    }
}
