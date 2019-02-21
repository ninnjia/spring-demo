import {ErrorHandler, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  constructor(
    // @Inject(MatSnackBar) private snackBar: MatSnackBar,

  ) {
  }
  handleError(error: any): void {
    console.log('error')
    console.log(error);
    console.log(error.status)
  }
}
