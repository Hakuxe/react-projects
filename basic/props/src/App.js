import React from 'react';
import ContactCard from './components/ContactCard';

export default function App(){

    const contactsList =[
        {
            imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Bqf4ATpPh7qCRUzfdhvnkQHaEK%26pid%3DApi&f=1",
            title:"Ferrari",
            phone:" (31) 999999-8888 ",
            email:"nnnnnnnn@email.com",
        },
        {
            imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.uglZz0Sc-awWuOHvC6iuSgHaEL%26pid%3DApi&f=1",
            title:"Porche",
            phone:" (31) 999999-8888 ",
            email:"nnnnnnnn@email.com",
        },
        {
            imgUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7Lsh9mUIFayfwUsOW-YcpgHaEA%26pid%3DApi&f=1",
            title:"Maverick recalchutado",
            phone:" (31) 999999-8888 ",
            email:"nnnnnnnn@email.com",
        },

    ]

    return(
        <div>

            <ContactCard 
               contact = {contactsList}
            />
        
        </div>
    );
}