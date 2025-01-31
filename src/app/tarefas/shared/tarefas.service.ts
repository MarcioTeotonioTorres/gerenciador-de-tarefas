import { Injectable } from '@angular/core';
import { Tarefa } from './tarefas.model';



@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor() { }

listarTarefas(): Tarefa[]{
  const tarefas = localStorage['Tarefas']; 
  return tarefas ? JSON.parse(tarefas) : [];//if ternário, se tarefas for verdadeiro, converte para JSON, se não retorna um array vazio 
  }                                         
cadastrar(tarefa: Tarefa): void{
  const tarefas = this.listarTarefas();
  tarefa.id = new Date().getTime();//gera um id unico e une aos outros atributos do párametro tarefa
  tarefas.push(tarefa);//gerando um novo array com a tarefa adicionada
  localStorage['Tarefas'] = JSON.stringify(tarefas);//converte string para JSON salvando no local storage
  }

buscarPorId(id: number): Tarefa{
  const tarefas: Tarefa[] = this.listarTarefas(); 
  const tarefa = tarefas.find(tarefa => tarefa.id === id);
  if (!tarefa) {
    throw new Error(`Tarefa com id ${id} não encontrada`);
    }
  return tarefa;//retorna a tarefa que tem o id igual ao id passado como parâmetro
  }  

atualisarTarefa(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listarTarefas();
    tarefas.forEach((obj, index, objs) => {
        if(tarefa.id===obj.id){
          objs[index] = tarefa;
        }
    });
    localStorage['Tarefas'] = JSON.stringify(tarefas);
  }
remover(id: number): void{
  let tarefas: Tarefa[] = this.listarTarefas();
  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  localStorage['Tarefas'] = JSON.stringify(tarefas);
  } 
atualizarStatus(id: number): void{ 
  const tarefas: Tarefa[] = this.listarTarefas();
  tarefas.forEach((obj, index, objs) => {
    if(id === obj.id){
      objs[index].concluida = !obj.concluida;
    }
  });
  localStorage['Tarefas'] = JSON.stringify(tarefas);
  }

}