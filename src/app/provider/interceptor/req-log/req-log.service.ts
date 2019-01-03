import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoggerService } from '../../logger/logger.service';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ReqLogService implements HttpInterceptor {

  constructor(
    private logger: LoggerService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.logger.info('Doing request to', request.url.replace(ApiService.URI, ''));

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {

        if (event instanceof HttpResponse) {
          this.logger.info('Finished request', 
            request.url.replace(ApiService.URI, ''), 
            'with response', environment.log.full.http ? event.body : typeof event.body);
        }

        return event;
      }),
      catchError((event: HttpErrorResponse) => {
        this.logger.error(
          request.method, event.status, 
          'Request', request.url.replace(ApiService.URI, ''), 
          'with error', environment.log.full.http ? event.error : typeof event.error);

        return throwError(event);
      })
    );
  }
}
