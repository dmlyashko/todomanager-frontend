import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Task} from "../../classes/task.class";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SaveTaskService {

    private taskUrl = 'app/todayTasks';

    constructor(private http:Http) {}

    getTask(id) {
        return this.getTasks().then(tasks => tasks.find(task => task.id === id));
    }

    getTasks() {
        return this.http.get(this.taskUrl)
            .toPromise()
            .then(response => response.json().data as Task[])
            .catch(this.handleError);
    }

    save(task: Task):Promise<Task> {
        if (task.id) {
            return this.put(task);
        }

        return this.post(task);
    }

    private post(task: Task): Promise<Task> {
        let headers = new Headers({
            'Content-type': 'application/json'
        });

        return this.http
            .post(this.taskUrl, JSON.stringify(task), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(task: Task): Promise<Task> {
        let headers = new Headers({
            'Content-type': 'application/json'
        });

        let url = this.taskUrl + '/' + task.id;

        return this.http
            .put(url, JSON.stringify(task), {headers: headers})
            .toPromise()
            .then(() => task)
            .catch(this.handleError);
    }


    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}