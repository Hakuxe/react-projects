import React, { useState } from 'react';
import { getAllJSDocTagsOfKind } from 'typescript';
import "./styles.css";


export default function ToDOItem(props){

    console.log(props);


    const {tasks, onChange} = props
    
    return(
        <div>
            {tasks.map((item)=>{
                //style 
                let completedStyle = item.completed ? "task-completed": "";

                return(
                    <section className="todo-item" key={item.id}>
                            <input 
                                type="checkbox" 
                                onChange={() => onChange(item.id)} 
                                checked={item.completed} 
                               
                            /> 

                            <p  className={completedStyle}  >{item.text}</p>
                    </section>
                )
              
            })}
          
        </div>
    );
}