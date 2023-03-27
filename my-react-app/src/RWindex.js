// import ReactDOM from 'react-dom';
// import React from 'react';

// const domContainer= document.querySelector("#root");
// const Increment=()=>{
//   const [counter, setCounter]=React.useState(0);
//   return(
//     <div>
//       <h1 id='display'>{counter}</h1>
//       <div>
//         <button id='button' onClick={ ()=> setCounter(counter+1)}>Increment +</button>
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<div className='container'>
//   <Increment /><Increment />
//   <Increment />
//   </div>,
//   domContainer
// );

// //domstress
// let array1=[];
// let printnum=document.getElementById("domstress");

// for(let i=0;i<1000;i++){
//     array1.push(i);
//     printnum.innerHTML += ' ' + i;
// }
// printnum.innerText=array1.join(' ');

// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from "react";
import ReactDOM from "react-dom";

// const element=(
//   <h1>
//     <span>
//     This is abosolute wierd!
//     Time is: {new Date().toLocaleTimeString()}
//     </span>
//   </h1>
// );

// ReactDOM.render(element, document.getElementById('root'));
// console.log(element); //to see that react element is a valid js object

//Functional aspect in the above element shown::::
//Component start::::
// function Clock({locale}){   //THIS FUNCTION IS CALLED REACT COMPOENENT!  IT TAKES PARAMS AS OBJECTS
//   return (
//     <h1 className="heading">
//       <span className="text">
//         This is absolutely wierd clock!
//         Time is: {new Date().toLocaleTimeString(locale)}
//       </span>
//     </h1>
//   );
// }
// ReactDOM.render(<Clock locale="bn-BD"/>,document.getElementById('root'));
//This is a functional component. React also has a Class Component:::
// class Clock extends React.Component{   
//   render(){
//     return (
//       <h1 className="heading">
//         <span className="text">
//           This is absolutely wierd clock! 
//           {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}
//         </span>
//       </h1>
//     );
//   }
// }
// ReactDOM.render(<Clock locale="bn-BD">Time is: </Clock>,document.getElementById('root'));

