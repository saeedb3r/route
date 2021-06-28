import { ErrorHandler } from '@angular/core';

export class GlobalError implements ErrorHandler {
  handleError(error: any): void {
    throw new Error('An unexpected error happened.');
  }
}
