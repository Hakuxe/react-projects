/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */
import React from "react";

export default class FormsPratice extends React.Component{

    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            location: "brasil",
           
            showFormData: false,

            isVegan:false,
            isKosher: false,
            isLactoseFree: false,
            dietaryRestrictions:{
               
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*
        
    First name (text input)
    Last name (text input)
    Age (number input)
    Gender (radio buttons with 2 or more options)
    Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
    Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

    */

    handleChange(event){
        const {name, value, type, checked} = event.target;
        const inputValue = type==="checkbox"? checked : value;

    
        this.setState({
            [name]:inputValue
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState(oldState =>{
           return {showFormData: !oldState.showFormData}
        })
    }


    render(){

        const destinations  = ["Estados Unidos","Canadá","África","Brasil"];

        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <section>
                    <input 
                        name={"firstName"} 
                        type={"text"} 
                        onChange={this.handleChange} 
                        value={this.state.firstName}
                        placeholder={"First Name"}

                    /> 
                    <br />
                    <input 
                        name={"lastName"} 
                        type={"text"} 
                        onChange={this.handleChange} 
                        value={this.state.lastName}
                        placeholder={"Last Name"}
                    />
                    <br />
                    <input 
                        name={"age"} 
                        type={"number"} 
                        onChange={this.handleChange} 
                        value={this.state.age}
                        placeholder={"age"}
                    />
                </section>

                <section>
                    <label>
                        <input name="gender" type={"radio"} onChange={this.handleChange} value={this.state.gender ==="male"}/>
                        male
                    </label>

                    <label>
                        <input name="gender" type={"radio"} onChange={this.handleChange} value={this.state.gender ==="female"}/>
                        female
                    </label>
                    <label>
                        <input name="gender" type={"radio"} onChange={this.handleChange} value={this.state.gender ==="other"}/>
                        other
                    </label>
                </section>

                <section>
                    <select name="location" value={this.state.location} onChange={this.handleChange}>
                        <option value={"Estados Unidos"}>EUA</option>
                        <option value={"Canadá"}>Canadá</option>
                        <option value={"África do sul"}>África do sul</option>
                    </select>
                </section>

                <section>
                    <select name="location" value={this.state.location} onChange={this.handleChange}>
                        {destinations.map(item =>{
                            return (
                                <option value={item}>{item}</option>
                            )
                        })}
                    </select>
                </section>

              
                <hr></hr>
                <label htmlFor="dietaryRestrictions">dietary restrictions: </label>
                <section id={"dietaryRestrictions"}>
                    
                    <label htmlFor="isVegan">
                        <input 
                            id={"isVegan"}
                            type="checkbox" 
                            name={"isVegan"}
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestrictions.isVegan}
                        />
                        vegetarian
                    </label>
                    <label htmlFor="isKosher">
                        <input 
                            id={"isKosher"}
                            type="checkbox" 
                            name={"isKosher"}
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestrictions.isKosher}
                        />
                        kosher
                    </label>
                    <label htmlFor="isLactoseFree">
                        <input 
                            id={"isLactoseFree"}
                            type="checkbox" 
                            name={"isLactoseFree"}
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestrictions.isLactoseFree }
                        />
                        lactose free
                    </label>
                    
                </section>
               <button type="submit">Enviar</button>             
            </form>

            {this.state.showFormData &&
                <div>
                    <hr />
                    <h2>Entered information:</h2>
                    <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                    <p>Your age: {this.state.age}</p>
                    <p>Your gender: {this.state.gender}</p>
                    <p>Your destination: {this.state.location}</p>
                    <p>
                        Your dietary restrictions: 
                        
                    </p>
                </div>
            }

            </div>
        );
    }


}