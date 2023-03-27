import Emoji from "./Emoji";

export default class Text extends Emoji{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        const decoratedText=this.addEmoji('I am Ifad','😈');
        return super.render(decoratedText);
    }
}