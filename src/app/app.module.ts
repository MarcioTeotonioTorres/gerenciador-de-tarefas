import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routes";
import { TarefasModule } from "./tarefas/tarefas.module";
import { RouterModule } from "@angular/router";
import { DirectiveTarefaConcluidaDirective } from "./tarefas/shared/directive-tarefa-concluida.directive";

@NgModule({
    declarations: [
    ],
    imports:[
        BrowserModule, 
        FormsModule,
        HttpClientModule,
        AppRoutes,
        TarefasModule,
        RouterModule,DirectiveTarefaConcluidaDirective
       
    ],
    providers:[],
    bootstrap:[
       
    ]
        
})
export class AppModule{}