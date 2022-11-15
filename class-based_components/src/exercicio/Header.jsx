import React from "react"
// #2
class Header extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this);
        
          return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
    
  
}

export default Header;