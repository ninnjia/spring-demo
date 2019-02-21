import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatGridListModule,
  MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTreeModule
} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NgxEchartsModule} from "ngx-echarts";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {LayoutModule} from "@angular/cdk/layout";
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule,
    NgxEchartsModule,
    MatDialogModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    DragDropModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    LayoutModule,
    MatSortModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    FormsModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule,
    NgxEchartsModule,
    MatDialogModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    DragDropModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    LayoutModule,
    MatSortModule,
  ],
})
export class ShareModule {
}
