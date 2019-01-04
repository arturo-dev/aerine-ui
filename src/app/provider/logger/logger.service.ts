import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private infoStyles = 'background-color: #0077c2; color: white; border-radius: 2px';
  private errorStyles = 'background-color: #F44336; color: white; border-radius: 2px';
  private debugStyles = 'background-color: #F57C00; color: white; border-radius: 2px';

  constructor() {}

  info(...args: any[]): void {
    console.info('%c[INFO]', this.infoStyles, ...args);
  }

  error(...args: any[]): void {
    console.info('%c[ERROR]', this.errorStyles, ...args);
  }

  debug(...args: any[]): void {
    if (environment.log.debug) {
      console.info('%c[DEBUG]', this.debugStyles, ...args);
    }
  }
}
