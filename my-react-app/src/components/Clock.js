import React from "react";
import Button from './Button';

class Clock extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={date:new Date()};
    // } //USE THIS WHEN THE PROPS IS USED IN THIS.STATE OF THE CONSTRUCTOR ELSE JUST USE STATE
    state={
      date:new Date(),
      locale: 'bn-BD',
      language:'সময়',
    };
    componentDidMount(){
        this.clockTimer = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }
    tick(){
        this.setState({
            date:new Date(),
        });
    }
    handleClick=(locale,language)=>{
        this.setState({
            locale,
            language,
        });
    }
    render(){
      const {date, locale, language}=this.state; //to send parameter in button use arrow func::: ()=>this.handleClick('en-US)
      return (
        <div>
        <h1 className="heading">
          <span className="text">
            This is absolutely wierd clock! {language}:
            {date.toLocaleTimeString(locale)}
          </span>
        </h1>
        {locale==='bn-BD'?(
            <Button change={this.handleClick} locale='en-US' language='Time' show/>
        ) : (
          <Button change={this.handleClick} locale='bn-BD' language='সময়' show={false}/>
        )
      }
        </div>
      );
    }
  }

export default Clock;  //anyone who import this file will 
                        //get this class by default