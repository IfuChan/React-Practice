import { useEffect, useState } from "react";

export default function MyComponent() {
    const [count, setCount] = useState(0);
    // const [text, setText] = useState('');

    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log("tick is ticking")
        setDate(new Date());
    };

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    // useEffect(() => {
    //     console.log("updateing documenting title")
    //     document.title = `Clicked ${count} times`;
    // }, [count]); //will not be called when input field is typed

    useEffect(() => {
        console.log("updateing documenting title")
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('timer calling');
        const interval = setInterval(tick, 1000);

        //using return then it will behave as componentWillUnmount
        return () => {
            clearInterval(interval);
        };
    }, []); //empty array means only call once, DidMount

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            {/* <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </p> */}
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    );
}