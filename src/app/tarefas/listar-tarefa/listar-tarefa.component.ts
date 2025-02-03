import { Component,OnInit } from '@angular/core';
import { TarefasService } from '../shared/tarefas.service';
import { Tarefa } from '../shared/tarefas.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectiveTarefaConcluidaDirective } from '../shared/directive-tarefa-concluida.directive';



@Component({
  selector: 'app-listar-tarefa',
  imports: [CommonModule,   
    FormsModule,
    RouterModule,
    DirectiveTarefaConcluidaDirective
    ],
  templateUrl: './listar-tarefa.component.html',
  styleUrl: './listar-tarefa.component.css'
})
export class ListarTarefaComponent implements OnInit {
  
  tarefas: Tarefa[] = [];
 
  constructor(private tarefaService: TarefasService) { }

  ngOnInit(): void {
    this.tarefas = this.tarefaService.listarTarefas();
    
  }

  listarTarefas(): Tarefa[]{
    return this.tarefaService.listarTarefas();
  }

  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if(tarefa.id !== undefined && confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTarefas();
    }else{
      alert('Erro ao tentar remover a tarefa "' + tarefa.nome + '"');
    }

    
    } 
  alterarStatus(tarefa: Tarefa): void{
    if(tarefa.id !== undefined && confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')){
        this.tarefaService.atualizarStatus(tarefa.id);
        this.tarefas = this.listarTarefas();
    }else{
        alert('Erro ao tentar alterar o status da tarefa "' + tarefa.nome + '"');   
      }


  }

}
