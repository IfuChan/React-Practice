import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

export default function App(){
    return <div className="App">
        <ClickCounter/>
        <HoverCounter/>
    </div>;
}





//FOR COMPOSITION::::
// import Emoji from "./components/composition/Emoji";
// import Text from "./components/composition/Text";
// import Bracket from "./components/composition/Bracket";

// function App(){
//     return(
//        <Emoji>
//         {({addEmoji})=>(
//         <Bracket>
//            {({addBracket})=><Text addEmoji={addEmoji} addBracket={addBracket}/>} 
//         </Bracket>
//         )}
//        </Emoji>
//     // <Text/>   // So text can work by itself, not tightly copled
//     );
// }

// export default App;