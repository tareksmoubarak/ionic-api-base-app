import { XHRBackend, RequestOptions } from '@angular/http';
import { WeinHttp } from '../providers/wein-http';
import { Alert } from '../providers/alert';
import { User } from '../providers/user';

export function weinHttpFactoryFunc(backend: XHRBackend, defaultOptions: RequestOptions, alert: Alert, userProvider: User) {
  return new WeinHttp(backend, defaultOptions, alert, userProvider);
}

// export function createTranslateLoader(http: WeinHttp) {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// }

export let weinHttpProvider = {
  provide: WeinHttp,
  useFactory: weinHttpFactoryFunc,
  deps: [XHRBackend, RequestOptions, Alert, User]
};

export let translateProvider = {
  loader: {
    // provide: TranslateLoader,
    // useFactory: (createTranslateLoader),
    deps: [WeinHttp]
  }
};