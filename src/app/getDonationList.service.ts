import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class getDonationListService {

  private listUrl = '/api/contributions';

  constructor (private http: Http) {}

  getList(): Promise<any> {
    return this.http.get(this.listUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }


}
