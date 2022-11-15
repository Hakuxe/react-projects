import React from "react";
import axios from "axios";

export default class MemeGenerator extends React.Component{

    constructor(){
        super();
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImg:[]
        }
    }


    componentDidMount(){
        axios.get('https://api.imgflip.com/get_memes')
            .then(response=>{
                const {memes} = response.data.data;
                console.log(memes)
                this.setState({allMemeImg:memes})
            })
    }

    handleChange(event){
        const {name, type, value,checked} = event.target;
        const valueInput = type ==="checkbox"? checked :value

        this.setState({[name]: valueInput})
        console.log(this.state)
    }

    handleClick(event){
        event.preventDefault()
        const{allMemeImg} = this.state;
        let randomNumber = Math.floor(Math.random() *100 );

        this.setState({randomImg:allMemeImg[randomNumber].url})
    }

    render(){
        console.log(this.state)
        return(
            <div>
               <form className="meme-form">
                   <input 
                        name="topText" 
                        type="text" 
                        onChange={this.handleChange.bind(this)}
                        value={this.state.topText}
                        placeholder="top text for the meme"
                    />
                   <input 
                        name="bottomText" 
                        type="text" 
                        onChange={this.handleChange.bind(this)}  
                        value={this.state.bottomText}
                        placeholder="bottom text for the meme"
                    />
            
                   <button onClick={this.handleClick.bind(this)}>generate</button>
               </form>

               <section className="meme">
                   <img src={this.state.randomImg} alt="meme"/>
                   <h2 className="top">{this.state.topText}</h2>
                   <h2 className="bottom ">{this.state.bottomText}</h2>
                   
               </section>
            </div>
        );
    }
}