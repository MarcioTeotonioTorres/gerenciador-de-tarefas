import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasService } from './shared/tarefas.service';
import { AppRoutes } from '../app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    AppRoutes,FormsModule   
  ],
  providers: [
    TarefasService
  ]
})
export class TarefasModule { }
 