import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class ScheduledService {
    tasks:any;

    private tasksUrl = 'app/scheduledTasks';

    constructor(private http: Http) {}

    public getTasks():Observable<any> {
        return this.http.get(this.tasksUrl)
            .map(this.fetchData)
            .catch(this.handleError);
    }

    private fetchData(response) {
        let body = response.json();

        return body.data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}