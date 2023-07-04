import React from 'react';

export default function Capslock (props) {
    console.log(props);
    return(
        <span>{props.children.toUpperCase()}</span>
    );

}

