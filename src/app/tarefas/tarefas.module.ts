import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutes } from '../app.routes';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectiveTarefaConcluidaDirective } from './shared/directive-tarefa-concluida.directive';
import { TarefasService } from './shared/tarefas.service';  


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    AppRoutes,FormsModule,RouterModule,DirectiveTarefaConcluidaDirective    
  ],
  providers: [
    TarefasService
  ]
})
export class TarefasModule { }
 