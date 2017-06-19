import { Platform } from "ionic-angular";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { Api } from "./api";
import { User } from "./user";
import { Alert } from '../providers/alert';

// import { IGetServicesResponse } from "../interfaces/api-responses/IGetServicesResponse";
// import { IGetAreasResponse } from "../interfaces/api-responses/IGetAreasResponse";
// import { IGetLanguagesResponse } from "../interfaces/api-responses/IGetLanguagesResponse";
// import { IGetCountriesResponse } from "../interfaces/api-responses/IGetCountriesResponse";
// import { IGetLanguageByIdResponse } from "../interfaces/api-responses/IGetLanguageByIdResponse";
// import { ILanguage } from "../interfaces/ILanguage";

@Injectable()
export class Config {

  // private _selectedLanguage: ILanguage;
  // private _isFirstLogin = false;
  public appVersion = "1.0.0";

  constructor(private _api: Api,
    private _storage: Storage,
    private _platform: Platform,
    private _user: User,
    private _alert: Alert) {
    // this._storage.get('selectedLanguage').then((language) => {
    //   if (language) {
    //     this._selectedLanguage = language;
    //   }
    // });
    // this._storage.get('isFirstLogin').then((isFirstLogin) => {
    //   if (isFirstLogin) {
    //     this._isFirstLogin = isFirstLogin;
    //   }
    // });
  }


  // public getIsFirstLogin(): boolean {
  //   return this._isFirstLogin;
  // }


  // public setIsFirstLogin(v: boolean) {
  //   this._isFirstLogin = v;
  //   this._storage.set("isFirstLogin", v);
  // }


  // public setSelectedLanguage(language: ILanguage) {
  //   // this._selectedLanguage = language;
  //   this._storage.set("selectedLanguage", language);
  // }

  // public getSelectedLanguage(): ILanguage {
  //   return this._selectedLanguage;
  // }

  // public getProvidedServices() {
  //   this._api.getServices().then((response: IGetServicesResponse) => {
  //     this._storage.set("services", response.data.services);
  //     console.log(response.data);
  //   });
  // }

  // public getProvidedAreas() {
  //   this._api.getAreas().then((response: IGetAreasResponse) => {
  //     this._storage.set("areas", response.data.areas);
  //     console.log(response.data);
  //   });
  // }

  // public getCountries() {
  //   this._api.getAvailableCountries().then((data: IGetCountriesResponse) => {
  //     this._storage.set('countries', data.data.countries);
  //   }).catch(err => {
  //     console.log(err);
  //   });

  // }

  // public getLanguages() {
  //   this._api.getAvailableLanguages().then((data: IGetLanguagesResponse) => {
  //     this._storage.set('languages', data.data.languages);
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // }

  // public getSelectedUserLanguage() {
  //   this._api.getLanguageById(this._user.getCurrentUser().language_id)
  //     .map(res => res.json())
  //     .subscribe((data: IGetLanguageByIdResponse) => {
  //       this.setSelectedLanguage(data.data.language);
  //     });
  // }

  // public checkForLanguage() {
  //   this._storage.get('selectedLanguage').then((language) => {
  //     if (language) {
  //       this._selectedLanguage = language;
  //     } else if (this._user.isAuthenticated()) {
  //       this.getSelectedUserLanguage();
  //     }
  //   });
  // }

//   public initPushNotifications() {
//     if (!this._platform.is('cordova')) {
//       console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
//       return;
//     }

//     const options: PushOptions = {
//       android: {
//         senderID: '993401026842',
//         icon: 'icon.png',
//       },
//       ios: {
//         senderID: '993401026842',
//         alert: 'true',
//         badge: true,
//         sound: 'true'
//       },
//     }

//     const pushObject: PushObject = this._push.init(options);
// // to check if we have permission
// this._push.hasPermission()
//   .then((res: any) => {

//     if (res.isEnabled) {
//       console.log('We have permission to send push notifications');
//     } else {
//       console.log('We do not have permission to send push notifications');
//     }

//   });
//     pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
//     pushObject.on('registration')
//       .subscribe((registration: RegistrationEventResponse) => {
//         console.log("device_token ->", registration.registrationId);
//         // TODO: Defer token sending if user is logged out to when he logs in
//         this._api.registerDeviceToken({ device_token: registration.registrationId })
//           .map(res => res.json())
//           .subscribe((data) => {
//             console.log(data, "Registered device token");
//           });
//       });

//     pushObject.on('notification')
//       .subscribe((notification: NotificationEventResponse) => {
//         console.log('message', notification.message);
//         // let self = this;
//         //if user using app and push notification comes
//         if (notification.additionalData.foreground) {
//           // if application open, show popup
//           console.log('received foreground');
//         } else {
//           //if user NOT using app and push notification comes
//           //TODO: Your logic on click of push notification directly
//           // self.nav.push(DetailsPage, {message: data.message});
//           console.log("Push notification clicked");
//         }
//       });

//     pushObject.on('error').subscribe((error: EventResponse) => console.error('Error with Push plugin', error));
//   }

}
