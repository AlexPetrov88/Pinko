import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from '../classes/classes.component';
import { ClassDetailsComponent } from './class-details/class-details.component';

const routes: Routes = [
    {
        path: 'classes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ClassesComponent
            },
            {
                path: ':classId',
                component: ClassDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassesDetailsRoutingModule {}
