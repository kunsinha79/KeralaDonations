import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
 
@Injectable()
export class FormService {
 
    private saveUrl = '/api/contributions';
 
    constructor(private http: Http) { }
 
    saveDetails(formdata): Promise<any>  {
       console.log('service saveDetails');
       return this.http.post(this.saveUrl, formdata)
       .toPromise()
       .then(response => response)
       .catch(this.handleError)
 
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
      }
 
}
 