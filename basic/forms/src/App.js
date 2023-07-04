import React from "react";
import FormsEInputsContainer from "./components/abordagenContainer/FormsEInputsContainer";
import FormsEInputs from "./components/FormsEInputs";
import FormsPratice from "./components/FormsPratice";


export default class App extends React.Component{
    render(){
        return(
            <div>
                <FormsEInputs />
                <br /><br />
                <FormsPratice />
                <br /><br />
                <br /><br />
                <FormsEInputsContainer />
            </div>
        );
    }
}