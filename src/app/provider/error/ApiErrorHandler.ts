import { ErrorHandler, Injectable } from "@angular/core";
import { LoggerService } from "../logger/logger.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiErrorHandler implements ErrorHandler {

    constructor(
        private logger: LoggerService
    ) { }

    handleError(error: any): void {
        this.logger.error('Handling', environment.log.full.handler ? error : error.toString().substring(0, 30), '...');
    }
}