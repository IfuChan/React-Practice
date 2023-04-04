// // import ComplexCounter from "./components/ComplexCounter";

// import CounterThree from "./components/CounterThree";

// // import Counter from "./components/Counter";

// export default function App() {

//     return (
//         <div className="app">
//             <div>
//                 <CounterThree />
//             </div>
//         </div>
//     );
// }

// //Nested Component useReducer example::::
// import React, { useReducer } from "react";
// import ComponentA from "./components/ComponentA";

// export const counterContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// export default function App() {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div className="app">
//             <div>Count: {count}</div>
//             <counterContext.Provider value={{ countDispatch: dispatch }}>
//                 <ComponentA />
//             </counterContext.Provider>
//         </div>
//     );
// }

//useReducer with data::::
// import GetPost from "./components/GetPost";

// export default function App() {
//     return (
//         <div className="App">
//             <GetPost />
//         </div>
//     );
// }

import GetPost2 from "./components/GetPost2";

export default function App() {
    return (
        <div className="App">
            <GetPost2 />
        </div>
    );
}