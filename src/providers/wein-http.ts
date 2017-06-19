import { Headers, Http, Request, Response, RequestOptionsArgs, ConnectionBackend, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Alert } from './alert';
import { Observable } from 'rxjs';
import { User as UserProvider } from './user';

import { User } from '../classes/User.class'

@Injectable()
export class WeinHttp extends Http {
  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, public alert: Alert, public userProvider: UserProvider, ) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<any> {
    return super.request(url, options)
      .catch((err: Response): any => {
        if (!err.ok) {
          return Observable.throw(err);
        }
        // else {
        //   // this.errorService.notifyError(err);
        //   return Observable.empty();
        // }
      })
      // .retryWhen(error => error.delay(500))
      // .timeout(2000, new Error('delay exceeded'))
      .finally(() => {
      });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    if (options === undefined) {
      options = {
        headers: new Headers()
      };
    }

    this.initializeOptions(options);

    if (this.userProvider.hasUser() && !options.headers.has('Authorization')) {
      options.headers.append(`Authorization`, `Bearer ${this.userProvider.getJWTToken()}`);
    }

    return super.get(url, options)
      .catch((err: Response): any => {
        if (!err.ok) {
          // if (err.statusText === "Unauthorized") {
          //   return Observable.throw(err);
          // }
          this._callErrorHandler(err);
          return Observable.throw(err);
        }
        // else {
        //   // this.errorService.notifyError(err);
        //   return Observable.empty();
        // }
      })
      // .retryWhen(error => error.delay(500))
      // .timeout(2000, new Error('delay exceeded'))
      .finally(() => {
      });
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    if (options === undefined) {
      options = {
        headers: new Headers()
      };
    }
    this.initializeOptions(options);

    console.log(options);

    if (this.userProvider.hasUser() && !options.headers.has('Authorization')) {
      options.headers.append(`Authorization`, `Bearer ${this.userProvider.getJWTToken()}`);
    }

    return super.post(url, body, options)
      .catch((err: Response): any => {
        if (!err.ok) {
          console.log(err);
          // if (err.statusText === "Unauthorized") {
          //   return Observable.throw(err);
          // }
          this._callErrorHandler(err);
          return Observable.throw(err);
        }
        // else {
        //   // this.errorService.notifyError(err);
        //   return Observable.empty();
        // }
      })
      .finally(() => {
      });
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    if (options === undefined) {
      options = {
        headers: new Headers()
      };
    }

    this.initializeOptions(options);

    // if (this.userProvider.hasUser() && !options.headers.has('Authorization')) {
    //   options.headers.append(`Authorization`, `Bearer ${this.userProvider.getJWTToken()}`);
    // }
    return super.put(url, body, options)
      .catch((err: Response): any => {
        if (!err.ok) {
          console.log(err);
          // if (err.statusText === "Unauthorized") {
          //   return Observable.throw(err);
          // }
          this._callErrorHandler(err);
          return Observable.throw(err);
        }
        // else {
        //   // this.errorService.notifyError(err);
        //   return Observable.empty();
        // }
      })
      .finally(() => {
      });
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    if (options === undefined) {
      options = {
        headers: new Headers()
      };
    }

    this.initializeOptions(options);

    // if (this.userProvider.hasUser() && !options.headers.has('Authorization')) {
    //   options.headers.append(`Authorization`, `Bearer ${this.userProvider.getJWTToken()}`);
    // }
    return super.delete(url, options)
      .catch((err: Response): any => {
        if (!err.ok) {
          console.log(err);
          // if (err.statusText === "Unauthorized") {
          //   return Observable.throw(err);
          // }
          this._callErrorHandler(err);
          return Observable.throw(err);
        }
        // else {
        //   // this.errorService.notifyError(err);
        //   return Observable.empty();
        // }
      })
      .finally(() => {
      });
  }

  private _callErrorHandler(error: Response) {
    if (error.status === 0) {
      // Case where the connection was refused / no internet
      this.alert.showError("Could not connect to server, Please try again later.");
    }
    if (error.status === 422) {
      let errorText = this.getValidationErrorText(error);
      this.alert.showError(errorText);
    }
    if (error.status === 401 || error.status === 404) {
      let errorText = this.getErrorText(error);
      this.alert.showError(errorText);
    }
    if (error.status === 500) {
      this.alert.showError(error.statusText);
    }
  }

  private getErrorText(error: Response): string {
    var bodyJson = error.json();
    return bodyJson.errors.message[0];
  }

  private getValidationErrorText(error: Response): string {
    var bodyJson = error.json();
    let apiMessage = bodyJson.errors.message[0];

    if (apiMessage) {
      return bodyJson.errors.message[0];
    }

    for (var key in bodyJson) {
      if (bodyJson.hasOwnProperty(key)) {
        var validationError = bodyJson[key];
        return validationError;
      }
    }
  }

  private initializeOptions(options: RequestOptionsArgs) {
    options.headers.append('Content-Type', 'application/json');
    options.headers.append('Accept', 'application/json');
  }
}