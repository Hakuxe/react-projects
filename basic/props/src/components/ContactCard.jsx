import React from 'react';

export default function ContactCard(props){
  
    return(
        <div>
            {props.contact.map( contact =>{
                return(
                    <div>
                        <img src={contact.imgUrl}/>
                        <h1> {contact.title}</h1>
                        <p>Phone: {contact.phone}</p>
                        <p>Email: {contact.email} </p>
                    </div >
                );
            })}
           
        </div>
    );
}