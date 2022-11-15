import React, { Component } from 'react';
import { render } from 'react-dom';
import ToDOItem from './components/ToDoItem';
import  "./styles.css";

import todoData from './todoData';

 class App extends Component{

    constructor(){
        super();
        this.state={
            todoList: todoData  
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){


        this.setState(oldState =>{
            oldState.todoList.map(item=>{
                if(item.id === id){
                    item.completed = !item.completed;
                }
                
            })

            return(oldState.todoList)


        })

    }

    render(){
        return(
            <section className="todo-list">
                <h1>To-Do list</h1>
                
        
                    <ToDOItem 
                        tasks={this.state.todoList}
                        onChange={this.handleChange}
                    />
                
    
             
               
            </section>
        );
     }
   
}

export default App;