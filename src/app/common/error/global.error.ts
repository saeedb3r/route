import { ErrorHandler } from '@angular/core';

export class GlobalError implements ErrorHandler {
  handleError(error: any): void {
    alert('Global Error Handler: An Unexpected error happened');
    throw new Error('Global >> Method not implemented.');
  }
}
