import {ErrorHandler, Inject} from "@angular/core";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";
/**
 * Created by xuxinying on 18-12-19.
 */
export class AniErrorHandler implements ErrorHandler {
  constructor(
    @Inject(MatSnackBar) private snackBar: MatSnackBar,

  ) {
  }
  handleError(error: any): void {
    console.log(error);
    this.snackBar.open(error.rejection || error.message, '', <MatSnackBarConfig>{
      duration: 2000,
    });
  }
}
