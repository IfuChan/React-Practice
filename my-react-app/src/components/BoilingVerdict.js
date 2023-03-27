export default function BoilingVerdict({celsius=0}){
    if(celsius>=100){
        return <p style={{color:"red"}}>The water would boil</p>;
    }else if(Number.isNaN(celsius)){
        return <p></p>;
    }
    return <p>The water would NOT boil</p>;
}