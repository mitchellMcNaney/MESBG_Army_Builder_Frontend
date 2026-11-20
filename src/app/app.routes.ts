import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UnitList} from './unit-list/unit-list';

export const routes: Routes = [
    {
        path: '',
        component: Home    
    },
    {
        path: 'units',
        component: UnitList
    }

];
