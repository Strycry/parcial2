import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinguinoComponent } from './pinguino.component';
import { PinguinoDetailComponent } from './pinguino-detail/pinguino-detail.component';
import { PinguinoListComponent } from './pinguino-list/pinguino-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PinguinoComponent, PinguinoDetailComponent, PinguinoListComponent],
  exports:[PinguinoListComponent]
})
export class PinguinoModule { }
