import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillComponent } from './components/pill/pill.component';



@NgModule({
  declarations: [PillComponent],
  imports: [
    CommonModule
  ],
  exports: [PillComponent]
})
export class PillsModule { }
