import {Component, Input, OnInit, EventEmitter, Output} from "@angular/core";
import {SaveTaskService} from "./savetask.service";
import {Task} from "../../classes/task.class";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'task-detail',
    templateUrl: 'app/components/savetask/savetask.component.html',
    providers: [SaveTaskService]
})
export class SaveTaskComponent implements OnInit
{
    @Input() task: Task;
    @Output() close = new EventEmitter();

    error: any;
    navigated = false;
    message: any;

    constructor (private route: ActivatedRoute, private saveService:SaveTaskService) {}

    ngOnInit():void {
        this.task = new Task();
        this.route.params.forEach((params:Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.saveService.getTask(id)
                    .then(task => this.task = task);
            } else {
                this.navigated = false;
            }
        });
    }

    save() {
        this.saveService.save(this.task)
            .then(task => {
                this.task = task;
                this.goBack(task);
            });

        this.message = 'Task ' + this.task.name + ' saved';
        this.task = new Task();

    }

    goBack(savedTask: Task = null) {
        this.close.emit(savedTask);
        if (this.navigated) {window.history.back()};
    }
}
