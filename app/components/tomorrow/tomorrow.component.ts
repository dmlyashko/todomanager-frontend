import {Component, OnInit} from '@angular/core';
import {Task} from "../../classes/task.class";
import {TomorrowService} from "./tomorrow.service";

@Component({
    templateUrl: 'app/components/tomorrow/tomorrow.component.html',
    selector: 'tomorrow'
})

export class TomorrowComponent implements OnInit {
    public tasks: Task[];

    private errorMessage;

    constructor(private tomorrowService: TomorrowService) {}

    ngOnInit():void {
        this.getTasks();
    }

    getTasks() {
        return this.tomorrowService.getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => this.errorMessage = <any>error
            );
    }
}