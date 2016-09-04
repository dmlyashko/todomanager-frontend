import {Component, OnInit} from '@angular/core';
import {TodayService} from "./today.service";
import {Task} from "../../classes/task.class";

@Component({
    templateUrl: 'app/components/today/today.component.html',
    selector: 'scheduled'
})

export class TodayComponent implements OnInit{
    public tasks:Task[];

    private selectedTask:Task;

    private errorMessage:any;

    constructor(private todayService: TodayService) {
    }

    ngOnInit():void {
        this.getTasks();
    }

    getTasks() {
        this.todayService.getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => this.errorMessage = <any>error);
    }

    onSelect(task: Task) { this.selectedTask = task; }
}