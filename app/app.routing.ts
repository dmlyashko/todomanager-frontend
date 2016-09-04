import { Routes, RouterModule } from '@angular/router';

import {TodayComponent} from "./components/today/today.component";
import {TomorrowComponent} from "./components/tomorrow/tomorrow.component";
import {ScheduledComponent} from "./components/scheduled/scheduled.component";
import {SomedayComponent} from "./components/someday/someday.component";
import {SaveTaskComponent} from "./components/savetask/savetask.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/today',
        pathMatch: 'full'
    },
    {
        path: 'today',
        component: TodayComponent
    },
    {
        path: 'tomorrow',
        component: TomorrowComponent
    },
    {
        path: 'scheduled',
        component: ScheduledComponent
    },
    {
        path: 'someday',
        component: SomedayComponent
    },
    {
        path: 'add-task',
        component: SaveTaskComponent
    },
    {
        path: 'edit-task/:id',
        component: SaveTaskComponent
    }
];

export const appRoutingProviders:any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
