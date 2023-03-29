import Content from "./Content";
import React from "react";

export default class Section extends React.Component{
    shouldComponentUpdate(){
        return true;
    }
    render(){
        console.log(' seciotn rendered');
        return(
            <div>
                <h1>This is a section</h1>
                <Content/>
            </div>
        );
    }
    
}