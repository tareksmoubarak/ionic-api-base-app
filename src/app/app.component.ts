import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';

import { User } from '../providers/user';
import { Api } from "../providers/api";
import { Config } from "../providers/config";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(public platform: Platform,
    private _storage: Storage,
    private _user: User,
    private _alertCtrl: AlertController,
    private _api: Api,
    private _config: Config,
    private _statusBar: StatusBar,
    private splashScreen: SplashScreen) {
    this.initializeApp();
    this.checkAuthentication();
  }
  public initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this._statusBar.styleLightContent();
      this.splashScreen.hide();

      // if (this._user.isAuthenticated()) {
      //   this._config.initPushNotifications();
      // }

      // let lang = this._config.getSelectedLanguage();
      // console.log(lang);
      // if (lang) {
      //   this.translate.use(lang.code);
      // }
    });
  }
  private checkAuthentication() {
    this._storage.get('userObject').then(userObject => {
      if (userObject !== null) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = TabsPage;
      }
    });
  }
}
