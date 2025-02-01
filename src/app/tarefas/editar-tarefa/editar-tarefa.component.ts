import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tarefa } from '../shared/tarefas.model';
import { TarefasService } from '../shared/tarefas.service'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-tarefa',
  imports: [],
  templateUrl: './editar-tarefa.component.html',
  styleUrl: './editar-tarefa.component.css'
})
export class EditarTarefaComponent implements OnInit {
  @ViewChild('formTarefa', { static: true }) formTarefa!: NgForm;
  tarefa!: Tarefa;

  constructor(private tarefaService: TarefasService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
    this.tarefaService.atualisarTarefa(this.tarefa);
    this.router.navigate(['/tarefas/listar']);
    }

  }
}
