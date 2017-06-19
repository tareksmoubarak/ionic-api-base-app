import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Alert provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Alert {

  constructor(private alertCtrl: AlertController) {
  }

  public showSuccess(message: string) {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  public showError(errorText: string) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: errorText,
      buttons: ['OK']
    });
    alert.present();
  }
}