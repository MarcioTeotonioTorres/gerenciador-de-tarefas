import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ListarTarefaComponent } from './tarefas/listar-tarefa/listar-tarefa.component';
//import { Tarefa } from './tarefas/shared/tarefas.model';
import { CadastrarTarefaComponent } from './tarefas/cadastrar-tarefa/cadastrar-tarefa.component';



export const routes: Routes = [
{
    path: '',
   // redirectTo: 'tarefas/listar',  // redireciona para a rota /tarefas 
   component: ListarTarefaComponent,
   pathMatch: 'full'
},
{
    path: 'tarefas',
    redirectTo: 'tarefas/listar'  // redireciona para a rota /tarefas
},
{
    path: 'tarefas/listar',
    component: ListarTarefaComponent
},
{
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutes {}