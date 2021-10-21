import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { JobsComponent } from './jobs/jobs.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
       path: 'jobs', component: JobsComponent 
    },
    {
        path: 'Home' , component: HomeComponent
    }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }
export const routingComponents =[JobsComponent]