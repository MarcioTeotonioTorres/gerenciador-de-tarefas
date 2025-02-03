import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarefa } from '../shared/tarefas.model';
import { TarefasService } from '../shared/tarefas.service'; 
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-tarefa',
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;
  tarefa!: Tarefa;

  constructor(
    private tarefaService: TarefasService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']; // o sinal de + converte para número,  e obtem o id pela rota
    this.tarefa = this.tarefaService.buscarPorId(id); //busca a tarefa pelo id
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) { // verifica se o formulário é válido
    this.tarefaService.atualisarTarefa(this.tarefa); // atualiza a tarefa
    this.router.navigate(['/tarefas/listar']); // redireciona para a lista de tarefas
    }

  }
}
