import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import ThemeContext from "../contexts/themeContext";
import React from "react";


// export default function Content(){
//     return(
//         <div>
//             <h1>This is a Content</h1>
//             <Counter>
//                 {(count,incrementCount)=>(
//                     <ThemeContext.Consumer>
//                         {({theme, switchTheme})=>(<HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>)}
//                     </ThemeContext.Consumer>
//                 )}
//             </Counter>
//         </div>
//     );
// }
//AS ABOVE IS FUNCTIONAL COMPONENT
//SAME CONTEXT THING CAN BE DONE FOR CLASS COMPONENT in that 
// case we may need the context out of the render function which is implemented below:::::

// export default class Content extends React.Component{
//     componentDidMount(){
//         console.log(this.context);
//     }
//     render(){
//         const {theme,switchTheme}=this.context;
//         return(
//             <div>
//                 <h1>This is a Content</h1>
//                 <Counter>
//                     {(count,incrementCount)=>(
//                         <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>)}
//                 </Counter>
//             </div>
//         );
//     }
// }
// Content.contextType = ThemeContext


//For same above task on fucntional component use hooks:
import { useContext } from "react";
export default function Content(){
    const context=useContext(ThemeContext); 
    const {theme,switchTheme}= context;
    console.log(' content rendered');

    return(
            <div>
                <h1>This is a Content</h1>
                <Counter>
                    {(count,incrementCount)=>(
                        <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>
                    )}
                </Counter>
            </div>
        );
}