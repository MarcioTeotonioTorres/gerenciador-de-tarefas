import { Component,OnInit } from '@angular/core';
import { TarefasService } from '../shared/tarefas.service';
import { Tarefa } from '../shared/tarefas.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-tarefa',
  imports: [CommonModule,
   
    FormsModule,RouterModule
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





}
