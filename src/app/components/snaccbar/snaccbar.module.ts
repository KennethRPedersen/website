import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnaccbarComponent } from './snaccbar/snaccbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnaccviewComponent } from './snaccbar/snaccview/snaccview.component';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [SnaccbarComponent, SnaccviewComponent],
  exports: [
    SnaccbarComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    FlexModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatBadgeModule
  ],
  entryComponents: [
    SnaccviewComponent
  ]
})
export class SnaccbarModule { }
