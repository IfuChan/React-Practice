import React from 'react';

export default class Form extends React.Component{
    state={
        title: 'shitty title',
        text: 'javascript is still aweome',
        library: 'React',
        isAwesome: false,
    }
    handleChange=(e)=>{
        if(e.target.type==='text'){
            this.setState({
                title:e.target.value,
            });
        }else if(e.target.type==='textarea'){
            this.setState({
                text:e.target.value,
            });
        }else if(e.target.type==='select-one'){
            this.setState({
                library:e.target.value,
            });
        }else if(e.target.type==='checkbox'){
            this.setState({
                isAwesome:e.target.checked,
            });
        }
        
    }

    submitHandler=(e)=>{
        const {title, text, library, isAwesome}=this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome);
    }

    render(){
        const {title, text, library, isAwesome}=this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input 
                    type="text" 
                    placeholder='Shitty form' 
                    value={title} 
                    onChange={this.handleChange}/>
                    <br />
                    <textarea name="text" 
                    value={text} 
                    onChange={this.handleChange}></textarea>
                    <br />
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">ANGULAR</option>
                    </select>
                    <br />
                    <input type="checkbox" 
                        checked={isAwesome}
                        onChange={this.handleChange}/>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}