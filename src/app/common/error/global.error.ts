import { ErrorHandler } from '@angular/core';

export class GlobalError implements ErrorHandler {
  handleError(error: any): void {
    console.error(error);
    // log.sendToDeveloper(error)
    // throw new Error('An unexpected error happened.');
  }
}
