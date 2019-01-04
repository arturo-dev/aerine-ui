import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ReqLogService } from './interceptor/req-log/req-log.service';
import { ApiErrorHandler } from './error/ApiErrorHandler';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import translateLoader from './translate/translate.loader';
import { LoadingService } from './interceptor/loading/loading.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqLogService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ApiErrorHandler
    },
    GooglePlus
  ]
})
export class ProviderModule { }
