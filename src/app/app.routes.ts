import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ListarTarefaComponent } from './tarefas/listar-tarefa/listar-tarefa.component';
import { Tarefa } from './tarefas/shared/tarefas.model';

export const routes: Routes = [
{
    path: '',
    redirectTo: 'tarefas/listar',  // redireciona para a rota /tarefas 
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

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutes {}