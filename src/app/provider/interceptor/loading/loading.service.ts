import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoggerService } from '../../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements HttpInterceptor {

  private static subject = new Subject<boolean>();
  private loading = 0;

  static change = LoadingService.subject.asObservable();

  constructor(
    private logger: LoggerService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loading++;
    this.emitLoading();
    this.logger.debug('Starting loading', this.loading);

    return next.handle(request).pipe(
      finalize(() => {
        this.loading--;
        this.emitLoading();
        this.logger.debug('Ending loading', this.loading);
      })
    );
  }

  private emitLoading() {
    LoadingService.subject.next(this.loading !== 0);
  }
  
}
