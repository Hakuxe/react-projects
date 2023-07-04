import React from "react"

export default function FormPresentational(props){
    return (
        <form onSubmit={props.handleSubmit}>
        { /* basic input text */}

            <input 
                type="text" 
                name={"firstName"} 
                placeholder={"Digite seu nome"} 
                onChange={props.handleChange}
                value={props.data.firstName}
            />
            <br />
            <input 
                type="text" 
                name={"phone"} 
                placeholder={"Digite seu telefone"} 
                onChange={props.handleChange} 
                value={props.data.phone}
            />
            <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="(31)33333-3333" 
                pattern="[0-9]{2}[0-9]{5}[0-9]{4}"// padrão do input 
                maxLength={11}
                value={props.data.phone}
                onChange={props.handleChange} 
            />

            <br /> <br />

            { /* checkbox input, não possui o atributo value e sim checked */}
            <label>
                <input 
                
                    name={"isChecked"}
                    type={"checkbox"}
                    checked={props.data.isChecked}
                    onChange={props.handleChange}
                /> concluído ?
            </label>

            <h1>{props.data.firstName} {props.data.phone}</h1>

            { /* textarea */}
            <textarea value={props.data.valueTextArea} rows={10} cols={30}/>
            <br /> <br />

            { /* radio input */}

            <label>
                <input 
                    type={"radio"}
                    name={"gender"}
                    value={"male"}
                    checked={props.data.gender ==="male"}
                    onChange={props.handleChange}
                /> Masculino 
            </label>
            <label>
                <input 
                    type={"radio"}
                    name={"gender"}
                    value={"female"}
                    checked={props.data.gender ==="female"}
                
                    onChange={props.handleChange}
                /> Feminino 
            </label>

            <br /><br />

            { /* select input */}
            <label htmlFor="">What is your favorite color? </label>
            <select value={props.data.favoriteColor} onChange={props.handleChange} name={"favoriteColor"}>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="purple">purple</option>
                <option value="red">red</option>
            </select>

            <p>your favorite color is {props.data.favoriteColor}</p>


        <button type="submit"> Enviar</button>
        </form>
    );
}