import { Injectable } from '@angular/core';
import {Summary} from './summary';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SummaryService {

  private summaryUrl = '/api/summary';

  constructor (private http: Http) {}

  getSummary(): Promise<any> {
    return this.http.get(this.summaryUrl)
               .toPromise()
               .then(response => response.json() as Summary)
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }


}
