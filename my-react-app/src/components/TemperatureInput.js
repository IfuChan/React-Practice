
const scaleNames={
    c:'Celsius',
    f:'fahrenheit',
}

export default function TemperatureInput({temperature, scale, onTemperatureChange}){
        return(
            <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}: </legend>
            <input 
            type="text" 
            value={temperature}
            onChange={(e)=>onTemperatureChange(e,scale)} 
            />
            </fieldset>
        );
}