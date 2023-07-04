import React from "react";

export default class App extends React.Component{

    constructor(){
        super();
        this.state={};
    }

    // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

    // o componente foi criado 
    // roda 1 vez quando o compoente é carregado para a page    
    componentDidMount(){}

    // definir se  o componet precisa atualizar ou não ? 
    shouldComponentUpdate(){
        // return true se for faze update
        // return false se não 
    }

    // quando o componete vai ser desmontado 
    componentWillUnmount(){
        //ex: remover um listener event
    }

    // quando o state depende das mudanças no props
    static getDerivedStateFromProps(props, state){
        //usado raramente
    }

    // faz uma cópia do component do jeito que ele está
    getSnapshotBeforeUpdate(){
        //usado raramente
    }

    /*  
        NÃO SÃO MAIS USADOS
    
        //toda vez que for recebido um props novo ele roda o componentWillReceiveProps
        componentWillReceiveProps(nextProps){}

        componentWillMount(){}

        componentWillUpdate(){}
   */

        

    render(){
        return(
            <div>
                <h1>ajdkajklja</h1>
            </div>
        );
    }
}