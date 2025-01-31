export class Tarefa{
    constructor(    
        public id?: number, /*interroga em typscript serve para tornar o atributo opcional*/
        public nome?: string,
        public concluida?: boolean
    ){}
}