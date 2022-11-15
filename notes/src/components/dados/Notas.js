export default class ArrayDeNotas{
    constructor(){
        this.arrayDeNotas=[];
        this._inscritos =[];
    }

    inscrever(func){
        //adicionar outros componentes nos inscritos dessa class
        this._inscritos.push(func)
    }

    desinscrever(func){
        //adicionar outros componentes nos inscritos dessa class
        this._inscritos = this._inscritos.filter(f=> f !== func);
    }

    notificar(){
        //avisar que houve alguma mudança nessa class aos incritos
        this._inscritos.forEach(func =>{ 
            func(this.arrayDeNotas);
        });
    }

    criarNota(titulo, texto, categoria) {
		const nota = new Nota(titulo, texto, categoria);
        this.arrayDeNotas.push(nota);
        this.notificar()
	}

    apagarNota(index){
		this.arrayDeNotas.splice(index, 1);
        this.notificar()
	}
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo     = titulo
        this.texto      = texto
        this.categoria  = categoria
    }
}