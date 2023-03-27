import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";

export default function App(){
    return <div className="App">
        {/* <User render={(isLoggedIn)=>isLoggedIn?'sumittsss':'Giestsss'}/>  
        <Counter render={(count, incrementCount)=><ClickCounter count={count} incrementCount={incrementCount}/>}/>
        <Counter render={(count, incrementCount)=><HoverCounter count={count} incrementCount={incrementCount}/>}/> */}
        <Counter>   
        {(count, incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}
        </Counter>
        <Counter>
        {(count, incrementCount)=>(<HoverCounter count={count} incrementCount={incrementCount}/>)}
        </Counter>
        {/*This is a different variation of the render props!!!!*/}
    </div>;
}
