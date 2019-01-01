import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private infoStyles = 'background-color: #0077c2; color: white; border-radius: 2px';

  constructor() { 
    
  }

  info(...args: any[]): void {
    console.info('%c[INFO]', this.infoStyles, ...args);
  }
}
