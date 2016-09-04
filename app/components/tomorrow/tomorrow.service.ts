import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Task} from "../../classes/task.class";
import {Http} from "@angular/http";

@Injectable()
export class TomorrowService {
    private getTasksUrl = 'app/tomorrowTasks';

    public constructor(private http:Http) {}

    public getTasks():Observable<Task[]> {
        return this.http.get(this.getTasksUrl)
            .map(this.handleResponse)
            .catch(this.handleError);
    }

    private handleResponse(data):Task[] {
        let body = data.json();

        return body.data || {};
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
