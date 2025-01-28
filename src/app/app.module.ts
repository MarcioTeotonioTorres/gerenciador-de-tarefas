import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
//import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routes";
import { TarefasModule } from "./tarefas/tarefas.module";

@NgModule({
    declarations: [      
    ],
    imports:[
        BrowserModule, 
        FormsModule,
        HttpClientModule,
        AppRoutes,
        TarefasModule
    ],
    providers:[],
    bootstrap:[
       
    ]
        
})
export class AppModel{}