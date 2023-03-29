import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import React from "react";
import ThemeContext from "./contexts/themeContext";

export default class App extends React.Component{
    state={
        theme:'dark',
    };
    render(){
        const {theme}=this.state;
        return (
            <div className="App">
                <Counter>   
                {(count, incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}
                </Counter>
                {/* <Counter>
                {(count, incrementCount)=>(<HoverCounter count={count} incrementCount={incrementCount}/>)}
                </Counter> */}
                <ThemeContext.Provider value={{theme:theme}}><Section/></ThemeContext.Provider>
            </div>
            );
    };
    
}
