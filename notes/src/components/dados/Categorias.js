export default class Categorias {
    constructor() {
        this.categorias = [];

        //quem deve saber de alterações nessa class
        this._inscritos = [];
    }

    inscrever(func) {
        //adicionar outros componentes nos inscritos dessa class
        this._inscritos.push(func)
    }

    desinscrever(func) {
        //adicionar outros componentes nos inscritos dessa class
        this._inscritos = this._inscritos.filter(f => f !== func);
    }


    notificar() {
        //avisar que houve alguma mudança nessa class aos incritos
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }


    adicionarCategoria(categoria) {
        this.categorias.push(categoria);
        this.notificar();
    }
}