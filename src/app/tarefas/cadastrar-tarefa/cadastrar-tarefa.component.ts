import { Component,OnInit, ViewChild} from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { Tarefa } from '../shared/tarefas.model';
import { TarefasService } from '../shared/tarefas.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.css'
})

export class CadastrarTarefaComponent implements OnInit {
  @ViewChild('formTarefa') formTarefa!: NgForm;
  tarefa!: Tarefa;
  

  constructor(private tarefaService: TarefasService, private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void {
   if(this.formTarefa.form.valid){
     this.tarefaService.cadastrar(this.tarefa);
     this.router.navigate(['/tarefas/listar']);
   }
  }

}
