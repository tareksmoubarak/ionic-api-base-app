import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';

import { User as UserClass } from '../classes/user.class';

@Injectable()
export class User {

  private _userObject: UserClass;
  private JWTToken: string;

  constructor(private local: Storage) {
    this.local.get('userObject').then(userObject => {
      if (userObject !== null) {
        this._userObject = userObject as UserClass;
      }
    }).catch(error => {
      console.log(error);
    });

    this.local.get('jwt').then(jwt => {
      if (jwt !== null) {
        this.JWTToken = jwt
      }
    });
  }

  public getCurrentUser(): UserClass {
    return this._userObject;
  }

  public storeCurrentUser(newUser: UserClass) {
    this.local.set('userObject', newUser);
    this._userObject = newUser;
  }

  public clearCurrentUser() {
    this._userObject = null;
    this.local.remove('userObject');
  }

  public hasUser(): Boolean {
    return Boolean(this._userObject);
  }

  public storeJWTToken(jwtToken: string) {
    this.local.set('jwt', jwtToken);
    this.JWTToken = jwtToken;
  }

  public getJWTToken(): string {
    return this.JWTToken
  }

  public isAuthenticated(): boolean{
    return this.hasUser() && tokenNotExpired(null, this.JWTToken);
  }

  public logout() {
    this._userObject = null;
    this.JWTToken = null;
    this.local.remove('userObject');
    this.local.remove('jwt');
  }
}