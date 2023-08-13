import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { ShopComponent } from './features/shop/shop.component';
import { ClassesComponent } from './features/classes/classes.component';
import { RecipeCreateComponent } from './features/recipe-create/recipe-create.component';
import { GadjetCreateComponent } from './features/gadjet-create/gadjet-create.component';
import { ClassCreateComponent } from './features/class-create/class-create.component';
import { EditRecipeComponent } from './features/edit-recipe/edit-recipe.component';
import { AuthActivate } from './shared/guards/auth.activate';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'aboutUs',
        component: AboutComponent
    },
    {
        path: 'catalog',
        component: RecipesComponent
    },
    {
        path: 'createRecipe',
        component: RecipeCreateComponent,
        canActivate: [AuthActivate]
    },
    {
        path: 'tools',
        component: ShopComponent
    },
    {
        path: 'createGadjet',
        component: GadjetCreateComponent,
        canActivate: [AuthActivate]
    },
    {
        path: 'classes',
        component: ClassesComponent
    },
    {
        path: 'createClass',
        component: ClassCreateComponent,
        canActivate: [AuthActivate]
    },
    {
        path: 'users',
        loadChildren: () => import('./auth/users/users.module').then((m) => m.UsersModule)
    },
    {
        path: 'edit',
        component: EditRecipeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// // import { NotFoundComponent } from './not-found/not-found.component';
// import { FormComponent } from './form/form.component';
// import { ErrorComponent } from './core/error/error.component';
// // import { NotFoundComponent } from './not-found/not-found.component';

// const routes: Routes = [
//     {
//         path: '',
//         pathMatch: 'full',
//         redirectTo: '/home'
//     },
//     {
//         path: 'home',
//         component: HomeComponent
//     },
//     {
//         path: 'form',
//         component: FormComponent
//     },
//     {
//         path: 'auth',
//         loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
//     },
//     {
//         path: 'error',
//         component: ErrorComponent
//     }
//     // {
//     //     path: '**',
//     //     component: NotFoundComponent
//     // }
// ];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}
