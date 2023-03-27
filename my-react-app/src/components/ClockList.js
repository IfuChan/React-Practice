import Clock from './Clock';
export default function ClockList({quantity = []}){
    return(
        <div>
            {quantity.map((clock)=>(<Clock key={clock}/>))}
        </div>
    );
}