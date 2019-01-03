import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReqLogService } from './interceptor/req-log/req-log.service';
import { ApiErrorHandler } from './error/ApiErrorHandler';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqLogService,
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
