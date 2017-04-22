import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountByPipe } from './pipes/count-by/count-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountByPipe],
  exports: [CountByPipe]
})
export class SharedModule { }
