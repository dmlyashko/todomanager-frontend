"use strict";
var router_1 = require('@angular/router');
var today_component_1 = require("./components/today/today.component");
var tomorrow_component_1 = require("./components/tomorrow/tomorrow.component");
var scheduled_component_1 = require("./components/scheduled/scheduled.component");
var someday_component_1 = require("./components/someday/someday.component");
var savetask_component_1 = require("./components/savetask/savetask.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/today',
        pathMatch: 'full'
    },
    {
        path: 'today',
        component: today_component_1.TodayComponent
    },
    {
        path: 'tomorrow',
        component: tomorrow_component_1.TomorrowComponent
    },
    {
        path: 'scheduled',
        component: scheduled_component_1.ScheduledComponent
    },
    {
        path: 'someday',
        component: someday_component_1.SomedayComponent
    },
    {
        path: 'add-task',
        component: savetask_component_1.SaveTaskComponent
    },
    {
        path: 'edit-task/:id',
        component: savetask_component_1.SaveTaskComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map