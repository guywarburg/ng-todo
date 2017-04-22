import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountByPipe } from './pipes/count-by/count-by.pipe';
import { FocusBlurDirective } from './directives/focus-blur/focus-blur.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountByPipe, FocusBlurDirective],
  exports: [CountByPipe, FocusBlurDirective]
})
export class SharedModule { }
