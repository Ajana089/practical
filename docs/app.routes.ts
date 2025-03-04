import { Routes } from '@angular/router';
import { TestsComponent } from './tests/tests.component';

export const routes: Routes = [
    {
        path:'home',component:TestsComponent
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'

    },
    
        {
            path:'**',
            redirectTo:'home',
            pathMatch:'full'
    
        }
    
   
];
