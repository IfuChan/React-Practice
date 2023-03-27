import React from 'react';

class Button extends React.Component{
    shouldComponentUpdate(nextProps){ //to stop button from rerendering with clock!
        const {change:currentChange, locale:currentLocale}=this.props;
        const {change:nextChange,locale:nextLocale}=nextProps;
        if(currentChange===nextChange && nextLocale===currentLocale){
            return false;
        }
        return true;
    }
    render(){
        const { change, locale, show, language}=this.props;
        return(
            <>
            <button type="button" onClick={()=>change(locale,language)}>
                {locale==='bn-BD'? 'Change Language' : 'ভাষা পরিবর্তন করুন'}
            </button>
            {show && <p>I love Bangladesh!</p>}
            </>
        );
    }
}
export default Button;