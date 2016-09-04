import {Component, OnInit} from '@angular/core';
import {ScheduledService} from "./scheduled.service";

@Component({
    templateUrl: 'app/components/scheduled/scheduled.component.html',
    selector: 'scheduled',
    providers: [ScheduledService]
})

export class ScheduledComponent implements OnInit
{
    sections:any;

    private error: any;

    constructor(private scheduledService:ScheduledService) {}

    ngOnInit():void {
        this.getTasks();
    }

    getTasks() {
         this.scheduledService.getTasks().
             subscribe(
                 tasks => this.sections = tasks,
                 error => this.error = error
             );
    }
}