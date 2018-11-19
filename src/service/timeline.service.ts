import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Timeline } from "../model/timeline";

@Injectable()
export class TimelineService {
    
    constructor(private http: HttpClient) { }

    getTimeline() : Observable<Timeline[]>{
        return this.http.get<Timeline[]>(
            `http://www.mocky.io/v2/5bf2b0662f00008300cfa211`);
    }
}