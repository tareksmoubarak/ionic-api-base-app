import { Injectable } from '@angular/core';
import { WeinHttp } from './wein-http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { JwtHelper } from 'angular2-jwt';

// import { NewUser } from './registration';
import { User } from './user';

@Injectable()
export class Api {

  public baseUrl: string;
  public jwtHelper: JwtHelper = new JwtHelper();
  public refreshSubscription: any;

  constructor(private _earthtechHttp: WeinHttp, private userProvider: User) {
    // this.baseUrl = 'http://45.79.174.162/api';
    // this.baseUrl = 'http://192.168.1.106:8000/api';
    this.baseUrl = 'http://127.0.0.1:8000/api';
  }

  // public sendHeartbeat(heartbeatParams: { longitude: number, latitude: number }) {
  //   this._earthtechHttp.post(`${this.baseUrl}/user/heartbeat`, heartbeatParams)
  //     .map(res => res.json())
  //     .subscribe((response) => {
  //       console.log(response);
  //       // resolve(response);
  //     }, (error) => {
  //       console.log(error);
  //       // reject(error);
  //     }, () => {

  //     });
  // }

  /**
   *
   * @param selectedUsernameParams Contains the username input by the user
   */
  // public verifyUsername(selectedUsernameParams: { username: string }) {
  //   return this._earthtechHttp.post(`${this.baseUrl}/auth/username_check`, selectedUsernameParams);
  // }

  /**
   * useCall
   */
  // public useCall() {
  //   return this._earthtechHttp.post(`${this.baseUrl}/user/call`, {});
  // }
  /**
   * registerDeviceToken
   */
  public registerDeviceToken(pushRegisterParams: { device_token: string }) {
    return this._earthtechHttp.post(`${this.baseUrl}/users/push/register`, pushRegisterParams);
  }

  // public registerNewUser(registerParams: NewUser) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.post(`${this.baseUrl}/auth/register`, registerParams)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => {

  //       });
  //   });
  // }

  // public verifyPhoneNumber(phoneNumberParams: { phone_number: string }) {
  //   return this._earthtechHttp.post(`${this.baseUrl}/auth/phone_verification`, phoneNumberParams);
  // }

  // public verifyToken(phoneNumberTokenParams: { phone_number: string, verification_code: string }) {
  //   return this._earthtechHttp.post(`${this.baseUrl}/auth/phone_verification_check`, phoneNumberTokenParams);
  // }

  public login(loginParams: { email: string, password: string }) {
    return new Promise((resolve, reject) => {
      this._earthtechHttp.post(`${this.baseUrl}/auth/login`, loginParams)
        .map(res => res.json())
        .subscribe((response) => {
          console.log(response);
          resolve(response);
        }, (error) => {
          console.log(error);
          reject(error);
        }, () => {
        });
    });
  }

  // public facebookLogin(fbLoginParams: any) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.post(`${this.baseUrl}/auth/facebook_login`, fbLoginParams)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => {

  //       });
  //   });
  // }

  // public facebookRegister(fbRegisterParams: any) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.post(`${this.baseUrl}/auth/facebook_register`, fbRegisterParams)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => {

  //       });
  //   });
  // }

  public getAllTickets() {
    return this._earthtechHttp.get(`${this.baseUrl}/tickets/getAllTickets`);
  }

  public verifySiteBarcode(barcodeNbre: number, siteId: number) {
    return new Promise((resolve, reject) => {
      this._earthtechHttp.get(`${this.baseUrl}/sites/verifySiteBarcode/${barcodeNbre}/${siteId}`)
        .map(res => res.json())
        .subscribe((response) => {
          resolve(response);
        }, (error) => {
          console.log(error);
          reject(error);
        }, () => {

        });
    });
  }
  
  public getPowerTestTypes() {
    return this._earthtechHttp.get(`${this.baseUrl}/tickets/getPowerTestTypes`);
  }

  public submitTicket(ticketsParams: { 
      pvSystemShadingEffect: string,
      pvSystemStructureCondition: string,
      pvSystemConnectedToGround: string,
      solarControllerNumberOfWorkingSolarController: string,
      solarControllerConnectedToGround: string,
      powerSystemConditionFuseCondition: string,
      powerSystemConditionJointsTightness: string,
      powerSystemConditionCableCondition: string,
      powerSystemConditionConduitPipeCondition: string,
      shelterConnectedToGround: string,
      shelterCoolingSystem: string,
      shelterShelterDoorStatus: string,
      inverterNumberOfWorkingModules: string,
      inverterConnections: string,
      inverterConnectedToGround: string,
      inverterInverterPowerLimit: number,
      gridCableCondition: string,
      gridAvailibility: string,
      siteAccessCondition: string, 
      siteGateStatus: string, 
      guardPresentOnSite: string, 
      groundCondition: string, 
      obsoleteEquipment: string,
      fenceCondition: string,
      razorCoilCondition: string, 
      connectedToGround: string,
      generatorStatus: string,
      generatorAlarm: string,
      generatorDoorStatus: string,
      generatorOilLevel: string,
      generatorOilQuality: string,
      generatorCoolantLevel: string,
      generatorRunningHours: number,
      generatorNumberOfStarts: number,
      generatorPowerCables: string,
      generatorFuses: string,
      generatorBreakers: string,
      generatorCanopyCondition: string,
      generatorConnectedToGround: string,
      fuelTankDieselCondition: string,
      fuelTankDamage: string,
      fuelTankConnectedToGround: string,
      fuelTankLeakage: string,
      fuelTankLockCondition: string,
      rectifierNumberOfWorkingModules: number,
      rectifierAlarms: string,
      rectifierLooseConnections: string,
      rectifierCurrentLimit: number,
      rectifierPowerLimit: number,
      rectifierConnectedToGround: string,
      batteryBankBatteryCondition: string,
      batteryBankWaterLevel: string,
      batteryBankLooseConnections: string,
      batteryBankBatteryCabinetCondition: string,
      pvSystemNumberOfBrokenPanels: string,
      pvSystemPanelCleanness: string,
      ticketId: number
    }
  ){
    return new Promise((resolve, reject) => {
      this._earthtechHttp.post(`${this.baseUrl}/tickets/submitTicketResponse`, ticketsParams)
        .map(res => res.json())
        .subscribe((response) => {
          console.log(response);
          resolve(response);
        }, (error) => {
          console.log(error);
          reject(error);
        }, () => {
        });
    });
  }
  // public getLanguageById(languageId: number) {
  //   return this._earthtechHttp.get(`${this.baseUrl}/public/languages/${languageId}`)
  // }

  // public getAvailableServices(query: string) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.get(`${this.baseUrl}/services/${query}`)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public getHandymenByService(searchParams: { service_id: number, filter?: string }) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.get(`${this.baseUrl}/handyman/service/${searchParams.service_id}/${searchParams.filter}`)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public getServices() {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.get(`${this.baseUrl}/public/services`)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public getAreas() {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.get(`${this.baseUrl}/public/areas`)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public getHandymanProfile(id: number) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.get(`${this.baseUrl}/handyman/${id}`)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public getCompanyProfile(id: number) {
  //   return this._earthtechHttp.get(`${this.baseUrl}/companies/${id}`);
  // }

  // public getCompaniesListedByService(serviceId) {
  //   return this._earthtechHttp.get(`${this.baseUrl}/companies/service/${serviceId}`)
  // }

  // public updateProfile(newInfo: any) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.put(`${this.baseUrl}/user/profile`, newInfo)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public getHandymanReviews(id: number) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.get(`${this.baseUrl}/handyman/${id}/reviews`)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // Appointment methods

  // public getAppointments() {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.get(`${this.baseUrl}/appointments`)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public getAppointmentsByStatus(status: string) {
  //   return this._earthtechHttp.get(`${this.baseUrl}/appointments/status/${status}`);
  // }

  // public getAppointmentById(id: number) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.get(`${this.baseUrl}/appointments/${id}`)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public updateAppointment(id: number, appointmentUpdateParams: { date: string, description: string, latitude: number, longitude: number }) {
  //   return this._earthtechHttp.put(`${this.baseUrl}/appointments/${id}`, appointmentUpdateParams)
  // }

  // public requestAppointment(appointmentParams: { date: string, description: string, handyman_id: number, address_id: number, service_id: number, latitude: number, longitude: number }) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.post(`${this.baseUrl}/appointments`, appointmentParams)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public cancelAppointment(id: string) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.put(`${this.baseUrl}/appointments/${id}/cancel`, {})
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public verifyAppointmentCompletion(id: string) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.put(`${this.baseUrl}/appointments/${id}/verify`, {})
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public acceptNewAppointmentTime(id: string) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.put(`${this.baseUrl}/appointments/${id}/accept-change`, {})
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public acceptAppointment(id: string) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.put(`${this.baseUrl}/appointments/${id}/accept`, {})
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public rejectAppointment(id: string, rejectAppointmentParams: { reason: string }) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.put(`${this.baseUrl}/appointments/${id}/reject`, rejectAppointmentParams)
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  // public completeAppointment(id: string) {
  //   return new Promise((resolve, reject) => {
  //     this._earthtechHttp.put(`${this.baseUrl}/appointments/${id}/complete`, {})
  //       .map(res => res.json())
  //       .subscribe((response) => {
  //         console.log(response);
  //         resolve(response);
  //       }, (error) => {
  //         console.log(error);
  //         reject(error);
  //       }, () => { });
  //   });
  // }

  /**
   * deleteAttachment
   */
  // public deleteAttachment(attachmentId) {
  //   return this._earthtechHttp.delete(`${this.baseUrl}/attachments/${attachmentId}`);
  // }

  // Tips and Tricks getAppointmentById
  // public getTipsAndTricks(languageId: number) {
  //   return this._earthtechHttp.get(`${this.baseUrl}/tips/language/${languageId}`);
  // }

  /**
   * reviewAppointment
   * Written using Observables
   */
  // public postUserReview(reviewParams: { handyman_id: number, appointment_id: number, review: string, rating: number }) {
  //   return this._earthtechHttp.post(`${this.baseUrl}/user-reviews`, reviewParams);
  // }

  /**
   * reportHandyman
   */
  // public reportHandyman(reportParams: { reported_id: number, reason: string, message?: string }) {
  //   return this._earthtechHttp.post(`${this.baseUrl}/reports`, reportParams);
  // }

  /**
   * companyInitiatePayment
   */
  // public companyInitiatePayment() {
  //   return this._earthtechHttp.get(`${this.baseUrl}/payment/company/new`);
  // }

  /**
   * companyCompleteMethod
   */
  // public companyCompleteMethod(completeParams: { purchase_id: number }) {
  //   return this._earthtechHttp.post(`${this.baseUrl}/payment/company/complete`, completeParams);
  // }

  /**
   * userInitiatePayment
   */
  // public userInitiatePayment(paymentParams: { username: string }) {
  //   return this._earthtechHttp.post(`${this.baseUrl}/payment/user/new`, paymentParams);
  // }

  /**
   * userCompletePayment
   */
  // public userCompletePayment(completeParams: { purchase_id: number }) {
  //   return this._earthtechHttp.post(`${this.baseUrl}/payment/user/complete`, completeParams);
  // }

  /*
  JWT REFRESH TOKEN CODE
  */

  private scheduleRefresh() {
    // If the user is authenticated, use the token stream
    // provided by angular2-jwt and flatMap the token

    let source = Observable.of(this.userProvider.getJWTToken()).flatMap(
      token => {
        // The delay to generate in this case is the difference
        // between the expiry time and the issued at time
        let jwtIat = this.jwtHelper.decodeToken(token).iat;
        let jwtExp = this.jwtHelper.decodeToken(token).exp;
        let iat = new Date(0);
        let exp = new Date(0);

        let delay = (exp.setUTCSeconds(jwtExp) - iat.setUTCSeconds(jwtIat));

        return Observable.interval(delay);
      });

    this.refreshSubscription = source.subscribe(() => {
      this.getNewJwt();
    });
  }

  public startupTokenRefresh() {
    // If the user is authenticated, use the token stream
    // provided by angular2-jwt and flatMap the token
    if (this.userProvider.isAuthenticated()) {
      let source = Observable.of(this.userProvider.getJWTToken()).mergeMap(
        token => {
          // Get the expiry time to generate
          // a delay in milliseconds
          let now: number = new Date().valueOf();
          let jwtExp: number = this.jwtHelper.decodeToken(token).exp;
          let exp: Date = new Date(0);
          exp.setUTCSeconds(jwtExp);
          let delay: number = exp.valueOf() - now;
          console.log(delay);
          // Use the delay in a timer to
          // run the refresh at the proper time
          return Observable.timer(delay);
        });

      // Once the delay time from above is
      // reached, get a new JWT and schedule
      // additional refreshes
      source.subscribe(() => {
        this.getNewJwt();
        this.scheduleRefresh();
      });
    }
  }

  // private unscheduleRefresh() {
  // Unsubscribe fromt the refresh
  // if (this.refreshSubscription) {
  // this.refreshSubscription.unsubscribe();
  // }
  // }

  private getNewJwt() {
    // Get a new JWT from Auth0 using the refresh token saved
    // in local storage
    this._earthtechHttp.get(`${this.baseUrl}/auth/refresh_token`)
      .map(res => res.json())
      .subscribe((response: { errors: boolean, data: { token: string } }) => {
        this.userProvider.storeJWTToken(response.data.token);
      }, (error) => {
        console.log(error);
      });
  }
}